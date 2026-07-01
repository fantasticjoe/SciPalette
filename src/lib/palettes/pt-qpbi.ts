import type { PaletteSource } from "../types";

const palette = {
  name: "qPBI",
  description: "Qualitative palette “qPBI” from the Redmonder collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#00B8AA", "#374649", "#FD625E", "#F2C811", "#5F6B6D", "#8AD4EB", "#FE9666", "#A66999"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
