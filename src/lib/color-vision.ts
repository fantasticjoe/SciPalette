import { hexToRgb } from "./palette-utils";

export type ColorVisionMode = "normal" | "protanopia" | "deuteranopia" | "tritanopia";

type Rgb = {
  r: number;
  g: number;
  b: number;
};

type Matrix = readonly [
  readonly [number, number, number],
  readonly [number, number, number],
  readonly [number, number, number],
];

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

function rgbToHex({ r, g, b }: Rgb): string {
  return `#${[r, g, b].map((channel) => clampChannel(channel).toString(16).padStart(2, "0")).join("")}`;
}

function applyMatrix(rgb: Rgb, matrix: Matrix): Rgb {
  return {
    r: rgb.r * matrix[0][0] + rgb.g * matrix[0][1] + rgb.b * matrix[0][2],
    g: rgb.r * matrix[1][0] + rgb.g * matrix[1][1] + rgb.b * matrix[1][2],
    b: rgb.r * matrix[2][0] + rgb.g * matrix[2][1] + rgb.b * matrix[2][2],
  };
}

export function simulateColorVisionDeficiency(hex: string, mode: ColorVisionMode): string {
  const rgb = hexToRgb(hex);

  if (!rgb) {
    return hex;
  }

  if (mode === "normal") {
    return rgbToHex(rgb);
  }

  return rgbToHex(applyMatrix(rgb, matrices[mode]));
}

export function simulatePaletteColorVision(colors: string[], mode: ColorVisionMode): string[] {
  return colors.map((color) => simulateColorVisionDeficiency(color, mode));
}
