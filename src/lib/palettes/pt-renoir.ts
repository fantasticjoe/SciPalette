import type { PaletteSource } from "../types";

const palette = {
  name: "Renoir",
  description: "Qualitative palette “Renoir” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#17154F", "#2F357C", "#6C5D9E", "#9D9CD5", "#B0799A", "#F6B3B0", "#E48171", "#BF3729", "#E69B00", "#F5BB50", "#ADA43B", "#355828"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
