import { hexToRgb } from "./palette-utils";

export type GrayscaleContrastPair = {
  first: string;
  second: string;
  firstLuminance: number;
  secondLuminance: number;
  ratio: number;
  passes: boolean;
};

export type GrayscaleContrastReport = {
  threshold: number;
  minimumRatio: number;
  passes: boolean;
  pairs: GrayscaleContrastPair[];
  failingPairs: GrayscaleContrastPair[];
};

export function rgbToGrayscaleLuminance(hex: string): number {
  const rgb = hexToRgb(hex);

  if (!rgb) {
    return 0;
  }

  return Math.round(0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b);
}

export function calculateGrayscaleContrast(first: string, second: string): number {
  const firstLuminance = rgbToGrayscaleLuminance(first);
  const secondLuminance = rgbToGrayscaleLuminance(second);
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);

  return (lighter + 5) / (darker + 5);
}

export function getGrayscaleContrastReport(colors: string[], threshold = 1.8): GrayscaleContrastReport {
  const pairs: GrayscaleContrastPair[] = [];

  for (let firstIndex = 0; firstIndex < colors.length; firstIndex += 1) {
    for (let secondIndex = firstIndex + 1; secondIndex < colors.length; secondIndex += 1) {
      const first = colors[firstIndex];
      const second = colors[secondIndex];
      const firstLuminance = rgbToGrayscaleLuminance(first);
      const secondLuminance = rgbToGrayscaleLuminance(second);
      const ratio = calculateGrayscaleContrast(first, second);

      pairs.push({
        first,
        second,
        firstLuminance,
        secondLuminance,
        ratio,
        passes: ratio >= threshold,
      });
    }
  }

  const failingPairs = pairs.filter((pair) => !pair.passes);
  const minimumRatio = pairs.length > 0 ? Math.min(...pairs.map((pair) => pair.ratio)) : Infinity;

  return {
    threshold,
    minimumRatio,
    passes: failingPairs.length === 0,
    pairs,
    failingPairs,
  };
}
