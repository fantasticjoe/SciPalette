import {
  calculateContrastRatio,
  hexToRgb,
  hueDistance,
  oklabDistance,
  oklchToRgb,
  rgbToHex,
  rgbToOklab,
  rgbToOklch,
  type OklchColor,
  type RgbColor,
} from "../color";
import { extractCandidateColors } from "./extractCandidateColors";
import type { Art2PalPaletteResult, CandidateColor, CandidateColorSet, GeneratedPalette, GeneratedPaletteKind } from "./types";

const FALLBACK_CATEGORICAL = ["#4e79a7", "#f28e2b", "#59a14f", "#e15759", "#76b7b2", "#edc948", "#b07aa1", "#9c755f"];
const FALLBACK_SEQUENTIAL = ["#f3f6ef", "#d6e6d5", "#aacda9", "#75ad7e", "#418a5e", "#206543"];
const FALLBACK_DIVERGING = ["#315b8c", "#6f90b8", "#bac8d5", "#f3f1ea", "#d9b7a2", "#b87657", "#8f3c2f"];
const FALLBACK_NEUTRAL = ["#fbf9f2", "#e9e4d8", "#c9c6ba", "#6f746c", "#252d31"];
const MIN_DIVERGING_HUE_DISTANCE = 80;
const PALETTE_KIND_PREFIXES: Record<GeneratedPaletteKind, string> = {
  categorical: "cat",
  sequential: "seq",
  diverging: "div",
  neutral: "neu",
};

type CountOption = {
  count?: number;
};

type SeedOption = {
  seed?: number;
};

type Art2PalGenerateOptions = SeedOption & {
  categoricalCount?: number;
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function normalize(value: number, min: number, max: number): number {
  return clamp((value - min) / (max - min), 0, 1);
}

function chromaScore(chroma: number): number {
  const target = 0.12;
  return 1 - clamp(Math.abs(chroma - target) / 0.12, 0, 1);
}

function hashPaletteSignature(kind: GeneratedPaletteKind, colors: string[]): string {
  const signature = `${kind}:${colors.map((color) => color.toLowerCase()).join(",")}`;
  let first = 0x811c9dc5;
  let second = 0x9e3779b9;

  for (let index = 0; index < signature.length; index += 1) {
    const code = signature.charCodeAt(index);
    first = Math.imul(first ^ code, 0x01000193);
    second = Math.imul(second ^ code, 0x85ebca6b);
  }

  return `${(first >>> 0).toString(36).padStart(7, "0")}${(second >>> 0).toString(36).padStart(7, "0")}`;
}

export function createGeneratedPaletteId(kind: GeneratedPaletteKind, colors: string[]): string {
  return `a2p-${PALETTE_KIND_PREFIXES[kind]}-${hashPaletteSignature(kind, colors)}`;
}

function candidateBaseScore(candidate: CandidateColor): number {
  const contrastScore = normalize(candidate.contrastWithWhite, 1.6, 5.4);
  return 0.45 * Math.sqrt(candidate.weight) + 0.25 * contrastScore + 0.3 * chromaScore(candidate.chroma);
}

export function generateCategoricalPalette(candidates: CandidateColorSet, options: CountOption & SeedOption = {}): string[] {
  const count = clamp(options.count ?? 8, 4, 12);
  const source = candidates.main.length >= 2 ? candidates.main : candidates.all.filter((candidate) => candidate.pool !== "rejected");

  if (source.length < 2) {
    return FALLBACK_CATEGORICAL.slice(0, count);
  }

  const selected: CandidateColor[] = [];
  const sorted = [...source].sort((a, b) => candidateBaseScore(b) - candidateBaseScore(a));
  selected.push(sorted[0]);

  while (selected.length < count && selected.length < sorted.length) {
    let best: CandidateColor | null = null;
    let bestScore = -Infinity;

    for (const candidate of sorted) {
      if (selected.includes(candidate)) {
        continue;
      }

      const minDistance = Math.min(...selected.map((color) => oklabDistance(candidate.center, color.center)));
      const minHueDistance = Math.min(...selected.map((color) => hueDistance(candidate.hue, color.hue))) / 180;

      if (minDistance < 0.075) {
        continue;
      }

      const score =
        0.35 * Math.sqrt(candidate.weight) +
        0.35 * normalize(minDistance, 0.08, 0.32) +
        0.15 * normalize(candidate.contrastWithWhite, 1.6, 5.4) +
        0.15 * ((chromaScore(candidate.chroma) + minHueDistance) / 2);

      if (score > bestScore) {
        best = candidate;
        bestScore = score;
      }
    }

    if (!best) {
      break;
    }
    selected.push(best);
  }

  const selectedColors = selected.map((candidate) => candidate.hex);
  if (selectedColors.length >= count) {
    return selectedColors.slice(0, count);
  }

  return [...selectedColors, ...FALLBACK_CATEGORICAL.filter((color) => !selectedColors.includes(color))].slice(0, count);
}

function pickMainHue(candidates: CandidateColorSet): CandidateColor | null {
  const pool = candidates.main.length > 0 ? candidates.main : candidates.all.filter((candidate) => candidate.pool !== "rejected");
  return [...pool].sort((a, b) => candidateBaseScore(b) - candidateBaseScore(a))[0] ?? null;
}

export function generateSequentialPalette(candidates: CandidateColorSet, options: CountOption = {}): string[] {
  const count = clamp(options.count ?? 6, 4, 9);
  const source = pickMainHue(candidates);
  if (!source) {
    return FALLBACK_SEQUENTIAL.slice(0, count);
  }

  const colors: string[] = [];
  for (let index = 0; index < count; index += 1) {
    const t = index / (count - 1);
    const lch: OklchColor = {
      L: 0.94 - t * 0.42,
      C: 0.018 + t * clamp(source.chroma, 0.08, 0.16),
      h: source.hue,
    };
    colors.push(rgbToHex(oklchToRgb(lch)));
  }
  return colors;
}

function pickDivergingEnds(candidates: CandidateColorSet): [CandidateColor, CandidateColor] | null {
  const pool = candidates.main.length >= 2 ? candidates.main : candidates.all.filter((candidate) => candidate.pool !== "rejected");
  let best: [CandidateColor, CandidateColor] | null = null;
  let bestScore = -Infinity;

  for (let i = 0; i < pool.length; i += 1) {
    for (let j = i + 1; j < pool.length; j += 1) {
      const first = pool[i];
      const second = pool[j];
      const hueDistanceDegrees = hueDistance(first.hue, second.hue);
      if (hueDistanceDegrees < MIN_DIVERGING_HUE_DISTANCE) {
        continue;
      }

      const hue = hueDistanceDegrees / 180;
      const balance = 1 - clamp(Math.abs(first.chroma - second.chroma) / 0.18 + Math.abs(first.lightness - second.lightness) / 0.4, 0, 1);
      const score = 0.55 * hue + 0.25 * balance + 0.2 * Math.sqrt(first.weight + second.weight);
      if (score > bestScore) {
        best = [first, second];
        bestScore = score;
      }
    }
  }

  return best;
}

function interpolateOklch(first: OklchColor, second: OklchColor, t: number): OklchColor {
  let hueDelta = second.h - first.h;
  if (Math.abs(hueDelta) > 180) {
    hueDelta -= Math.sign(hueDelta) * 360;
  }

  return {
    L: first.L + (second.L - first.L) * t,
    C: first.C + (second.C - first.C) * t,
    h: (first.h + hueDelta * t + 360) % 360,
  };
}

export function generateDivergingPalette(candidates: CandidateColorSet, options: CountOption = {}): string[] {
  const count = options.count ?? 7;
  const ends = pickDivergingEnds(candidates);
  if (!ends || hueDistance(ends[0].hue, ends[1].hue) < MIN_DIVERGING_HUE_DISTANCE || count < 5) {
    return FALLBACK_DIVERGING.slice(0, count);
  }

  const [first, second] = ends;
  const center: OklchColor = { L: 0.93, C: 0.012, h: 95 };
  const left: OklchColor = { L: clamp(first.lightness, 0.42, 0.62), C: clamp(first.chroma, 0.08, 0.15), h: first.hue };
  const right: OklchColor = { L: clamp(second.lightness, 0.42, 0.62), C: clamp(second.chroma, 0.08, 0.15), h: second.hue };
  const middle = Math.floor(count / 2);

  return Array.from({ length: count }, (_, index) => {
    if (index === middle) {
      return rgbToHex(oklchToRgb(center));
    }
    if (index < middle) {
      const t = index / middle;
      return rgbToHex(oklchToRgb(interpolateOklch(left, center, t)));
    }
    const t = (index - middle) / (count - middle - 1);
    return rgbToHex(oklchToRgb(interpolateOklch(center, right, t)));
  });
}

export function generateNeutralPalette(candidates: CandidateColorSet): string[] {
  const source = candidates.neutral.length > 0 ? candidates.neutral : candidates.all.filter((candidate) => candidate.chroma < 0.07);
  const sorted = [...source].sort((a, b) => b.lightness - a.lightness);
  const background = sorted.find((candidate) => candidate.lightness > 0.92 && candidate.chroma < 0.025)?.hex ?? FALLBACK_NEUTRAL[0];
  const surface = sorted.find((candidate) => candidate.lightness > 0.84 && candidate.lightness <= 0.92 && candidate.chroma < 0.03)?.hex ?? FALLBACK_NEUTRAL[1];
  const grid = sorted.find((candidate) => candidate.lightness > 0.65 && candidate.lightness <= 0.84 && candidate.chroma < 0.035)?.hex ?? FALLBACK_NEUTRAL[2];
  const axis = sorted.find((candidate) => candidate.lightness > 0.4 && candidate.lightness <= 0.65 && candidate.chroma < 0.035)?.hex ?? FALLBACK_NEUTRAL[3];
  const text = sorted.find((candidate) => candidate.lightness <= 0.36 && candidate.chroma < 0.035)?.hex ?? FALLBACK_NEUTRAL[4];

  return [background, surface, grid, axis, text];
}

function makePalette(kind: GeneratedPaletteKind, colors: string[]): GeneratedPalette {
  const meta = {
    categorical: {
      name: "Categorical",
      description: "Distinct colors reorganized from the source image for UMAP, t-SNE, cell types, and groups.",
      usage: "UMAP, t-SNE, cell types, groups",
    },
    sequential: {
      name: "Sequential",
      description: "A single-hue OKLCH ramp for expression, density, pseudotime, and probability.",
      usage: "Gene expression, density, pseudotime",
    },
    diverging: {
      name: "Diverging",
      description: "Two balanced source hues with a neutral midpoint for centered continuous variables.",
      usage: "logFC, z-score, correlation",
    },
    neutral: {
      name: "Neutral",
      description: "Paper, grid, axis, and text neutrals derived from the artwork when possible.",
      usage: "Backgrounds, axes, grid, labels",
    },
  }[kind];

  return { id: createGeneratedPaletteId(kind, colors), kind, colors, ...meta };
}

export function generateArt2PalPalettes(
  pixels: RgbColor[],
  options: Art2PalGenerateOptions = {}
): Art2PalPaletteResult {
  const candidates = extractCandidateColors(pixels, { k: 32, seed: options.seed ?? 42 });
  const hasEnoughMainColors = candidates.main.length >= 3;
  const messages: string[] = [];

  if (!hasEnoughMainColors) {
    messages.push("The image did not provide enough distinct scientific colors, so fallback palettes were used.");
  }

  const categoricalColors = hasEnoughMainColors
    ? generateCategoricalPalette(candidates, { count: options.categoricalCount ?? 8, seed: options.seed })
    : FALLBACK_CATEGORICAL.slice(0, options.categoricalCount ?? 8);
  const sequentialColors = hasEnoughMainColors ? generateSequentialPalette(candidates) : FALLBACK_SEQUENTIAL;
  const divergingColors = hasEnoughMainColors ? generateDivergingPalette(candidates) : FALLBACK_DIVERGING;
  const neutralColors = generateNeutralPalette(candidates);

  return {
    status: hasEnoughMainColors ? "generated" : "fallback",
    candidates,
    categorical: makePalette("categorical", categoricalColors),
    sequential: makePalette("sequential", sequentialColors),
    diverging: makePalette("diverging", divergingColors),
    neutral: makePalette("neutral", neutralColors),
    messages,
  };
}

export function validatePaletteDistance(colors: string[], minimumDistance = 0.07): boolean {
  const labs = colors.map((color) => rgbToOklab(hexToRgb(color)));
  for (let i = 0; i < labs.length; i += 1) {
    for (let j = i + 1; j < labs.length; j += 1) {
      if (oklabDistance(labs[i], labs[j]) < minimumDistance) {
        return false;
      }
    }
  }
  return colors.every((color) => calculateContrastRatio(hexToRgb(color)) >= 1.35);
}

export const fallbackPalettes = {
  categorical: FALLBACK_CATEGORICAL,
  sequential: FALLBACK_SEQUENTIAL,
  diverging: FALLBACK_DIVERGING,
  neutral: FALLBACK_NEUTRAL,
};
