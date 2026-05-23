import {
  hexToRgb,
  hueDistance,
  oklabDistance,
  rgbToHex,
  rgbToOklab,
  rgbToOklch,
  type OklchColor,
  type RgbColor,
} from "./art2pal/color";

export type ColorVisionMode = "normal" | "protanopia" | "deuteranopia" | "tritanopia";
export type ColorVisionDeficiencyMode = Exclude<ColorVisionMode, "normal">;
export type ColorblindAccessibilityLevel = "safe" | "caution" | "unsafe";

export type ColorblindAccessibilityModeReport = {
  mode: ColorVisionDeficiencyMode;
  minimumDistance: number;
  averagePairDistance: number;
  pairCount: number;
};

export type ColorblindAccessibilityFailingPair = {
  mode: ColorVisionDeficiencyMode;
  first: string;
  second: string;
  distance: number;
};

export type ColorblindAccessibilityReport = {
  score: number;
  safe: boolean;
  level: ColorblindAccessibilityLevel;
  minimumDistance: number;
  averageMinimumDistance: number;
  thresholds: {
    safeScore: number;
    cautionScore: number;
    safeMinimumDistance: number;
    cautionMinimumDistance: number;
  };
  modes: ColorblindAccessibilityModeReport[];
  failingPairs: ColorblindAccessibilityFailingPair[];
};

type Matrix = readonly [
  readonly [number, number, number],
  readonly [number, number, number],
  readonly [number, number, number],
];

type ParsedColor = {
  hex: string;
  rgb: RgbColor;
  lch: OklchColor;
};

const thresholds = {
  safeScore: 75,
  cautionScore: 55,
  safeMinimumDistance: 0.045,
  cautionMinimumDistance: 0.032,
} as const;

export const colorVisionModes: { id: ColorVisionMode; label: string; description: string }[] = [
  { id: "normal", label: "Original", description: "Unsimulated source colors." },
  { id: "protanopia", label: "Protanopia", description: "Red-sensitive cone loss simulation." },
  { id: "deuteranopia", label: "Deuteranopia", description: "Green-sensitive cone loss simulation." },
  { id: "tritanopia", label: "Tritanopia", description: "Blue-sensitive cone loss simulation." },
];

const matrices: Record<Exclude<ColorVisionMode, "normal">, Matrix> = {
  protanopia: [
    [0.56667, 0.43333, 0],
    [0.55833, 0.44167, 0],
    [0, 0.24167, 0.75833],
  ],
  deuteranopia: [
    [0.625, 0.375, 0],
    [0.7, 0.3, 0],
    [0, 0.3, 0.7],
  ],
  tritanopia: [
    [0.95, 0.05, 0],
    [0, 0.43333, 0.56667],
    [0, 0.475, 0.525],
  ],
};

function clampChannel(value: number): number {
  return Math.min(255, Math.max(0, Math.round(value)));
}

function applyMatrix(rgb: RgbColor, matrix: Matrix): RgbColor {
  return {
    r: clampChannel(rgb.r * matrix[0][0] + rgb.g * matrix[0][1] + rgb.b * matrix[0][2]),
    g: clampChannel(rgb.r * matrix[1][0] + rgb.g * matrix[1][1] + rgb.b * matrix[1][2]),
    b: clampChannel(rgb.r * matrix[2][0] + rgb.g * matrix[2][1] + rgb.b * matrix[2][2]),
  };
}

function parseColor(hex: string): ParsedColor | null {
  try {
    const rgb = hexToRgb(hex);
    return {
      hex: rgbToHex(rgb),
      rgb,
      lch: rgbToOklch(rgb),
    };
  } catch {
    return null;
  }
}

export function simulateColorVisionDeficiency(hex: string, mode: ColorVisionMode): string {
  const color = parseColor(hex);

  if (!color) {
    return hex;
  }

  if (mode === "normal") {
    return color.hex;
  }

  return rgbToHex(applyMatrix(color.rgb, matrices[mode]));
}

export function simulatePaletteColorVision(colors: string[], mode: ColorVisionMode): string[] {
  return colors.map((color) => simulateColorVisionDeficiency(color, mode));
}

function scoreToPercentage(value: number): number {
  return Math.max(0, Math.min(100, value * 100));
}

function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function hasHighChromaConfusionRisk(first: ParsedColor, second: ParsedColor): boolean {
  const averageChroma = (first.lch.C + second.lch.C) / 2;
  const strongestChroma = Math.max(first.lch.C, second.lch.C);
  const hueGap = hueDistance(first.lch.h, second.lch.h);
  const lightnessGap = Math.abs(first.lch.L - second.lch.L);

  if (averageChroma < 0.2 || strongestChroma < 0.24) {
    return false;
  }

  return (hueGap >= 65 && hueGap <= 135) || (hueGap >= 165 && hueGap <= 240) || lightnessGap < 0.18;
}

function emptyReport(): ColorblindAccessibilityReport {
  return {
    score: 0,
    safe: false,
    level: "unsafe",
    minimumDistance: 0,
    averageMinimumDistance: 0,
    thresholds,
    modes: Object.keys(matrices).map((mode) => ({
      mode: mode as ColorVisionDeficiencyMode,
      minimumDistance: 0,
      averagePairDistance: 0,
      pairCount: 0,
    })),
    failingPairs: [],
  };
}

export function evaluatePaletteColorblindAccessibility(colors: string[]): ColorblindAccessibilityReport {
  const parsed = colors.map(parseColor).filter((color): color is ParsedColor => color !== null);

  if (parsed.length < 2) {
    return emptyReport();
  }

  const modeReports: ColorblindAccessibilityModeReport[] = [];
  const failingPairs: ColorblindAccessibilityFailingPair[] = [];
  const allPairDistances: number[] = [];
  const allNearestDistances: number[] = [];

  for (const [mode, matrix] of Object.entries(matrices) as Array<[ColorVisionDeficiencyMode, Matrix]>) {
    const simulated = parsed.map((color) => rgbToOklab(applyMatrix(color.rgb, matrix)));
    const pairDistances: number[] = [];
    const nearestDistances = parsed.map(() => Number.POSITIVE_INFINITY);

    for (let firstIndex = 0; firstIndex < parsed.length; firstIndex += 1) {
      for (let secondIndex = firstIndex + 1; secondIndex < parsed.length; secondIndex += 1) {
        const distance = oklabDistance(simulated[firstIndex], simulated[secondIndex]);
        pairDistances.push(distance);
        allPairDistances.push(distance);
        nearestDistances[firstIndex] = Math.min(nearestDistances[firstIndex], distance);
        nearestDistances[secondIndex] = Math.min(nearestDistances[secondIndex], distance);

        if (distance < 0.14 && hasHighChromaConfusionRisk(parsed[firstIndex], parsed[secondIndex])) {
          failingPairs.push({
            mode,
            first: parsed[firstIndex].hex,
            second: parsed[secondIndex].hex,
            distance: Number(distance.toFixed(3)),
          });
        }
      }
    }

    const finiteNearestDistances = nearestDistances.filter(Number.isFinite);
    allNearestDistances.push(...finiteNearestDistances);

    modeReports.push({
      mode,
      minimumDistance: Number(Math.min(...pairDistances).toFixed(3)),
      averagePairDistance: Number(average(pairDistances).toFixed(3)),
      pairCount: pairDistances.length,
    });
  }

  const minimumDistance = Math.min(...allPairDistances);
  const averageMinimumDistance = average(allNearestDistances);
  const averagePairDistance = average(allPairDistances);
  const highChromaShare = parsed.filter((color) => color.lch.C > 0.2).length / parsed.length;

  const separationScore = scoreToPercentage((averagePairDistance - 0.16) / 0.2);
  const nearestScore = scoreToPercentage(averageMinimumDistance / 0.09);
  const minimumScore = scoreToPercentage(minimumDistance / thresholds.safeMinimumDistance);
  const highChromaPenalty = highChromaShare * 32;
  const failingPairPenalty = Math.min(44, failingPairs.length * 16);
  const rawScore = separationScore * 0.46 + nearestScore * 0.34 + minimumScore * 0.2 - highChromaPenalty - failingPairPenalty;
  const score = Math.round(Math.max(0, Math.min(100, rawScore)));
  const safe = score >= thresholds.safeScore && minimumDistance >= thresholds.safeMinimumDistance && failingPairs.length === 0;
  const level =
    safe
      ? "safe"
      : score >= thresholds.cautionScore && minimumDistance >= thresholds.cautionMinimumDistance
        ? "caution"
        : "unsafe";

  return {
    score,
    safe,
    level,
    minimumDistance: Number(minimumDistance.toFixed(3)),
    averageMinimumDistance: Number(averageMinimumDistance.toFixed(3)),
    thresholds,
    modes: modeReports,
    failingPairs,
  };
}
