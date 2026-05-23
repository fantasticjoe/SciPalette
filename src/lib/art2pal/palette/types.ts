import type { OklabColor, OklchColor, RgbColor } from "../color";

export type CandidateColor = {
  center: OklabColor;
  rgb: RgbColor;
  hex: string;
  count: number;
  weight: number;
  lightness: number;
  chroma: number;
  hue: number;
  contrastWithWhite: number;
  pool: "main" | "neutral" | "rejected";
};

export type CandidateColorSet = {
  all: CandidateColor[];
  main: CandidateColor[];
  neutral: CandidateColor[];
  rejected: CandidateColor[];
};

export type GeneratedPaletteKind = "categorical" | "sequential" | "diverging" | "neutral";

export type GeneratedPalette = {
  id: string;
  kind: GeneratedPaletteKind;
  name: string;
  description: string;
  usage: string;
  colors: string[];
};

export type Art2PalPaletteResult = {
  status: "generated" | "fallback";
  candidates: CandidateColorSet;
  categorical: GeneratedPalette;
  sequential: GeneratedPalette;
  diverging: GeneratedPalette;
  neutral: GeneratedPalette;
  messages: string[];
};

export type KMeansCluster = {
  center: OklabColor;
  lch: OklchColor;
  rgb: RgbColor;
  hex: string;
  count: number;
  weight: number;
  lightness: number;
  chroma: number;
  hue: number;
};
