import type { PaletteSource } from "../types";

const palette = {
  name: "pal7",
  description: "Qualitative palette “pal7” from the jcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1D3554", "#DFE07C", "#7F8E39", "#42858C", "#E48F1B", "#570D32", "#E5C616", "#D33B44"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
