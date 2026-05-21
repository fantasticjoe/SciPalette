import type { Palette } from "./types";

export type FeaturedPaletteGroups = {
  singleCellPalettes: Palette[];
  colorblindSafePalettes: Palette[];
  heatmapPalettes: Palette[];
};

export function getFeaturedPaletteGroups(palettes: Palette[]): FeaturedPaletteGroups {
  return {
    singleCellPalettes: palettes.filter(p => p.tags.includes("single-cell") || p.tags.includes("scRNA-seq")),
    colorblindSafePalettes: palettes.filter(p => p.colorblindSafe),
    heatmapPalettes: palettes.filter(p => p.category === "heatmap" || p.recommendedFor.includes("heatmap")),
  };
}

export function getPaletteCategoryCount(palettes: Palette[]): number {
  return new Set(palettes.map(p => p.category)).size;
}
