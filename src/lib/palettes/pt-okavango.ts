import type { PaletteSource } from "../types";

const palette = {
  name: "okavango",
  description: "Qualitative palette “okavango” from the werpals collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F7EDCA", "#F5DC9A", "#8EB155", "#497367", "#2B3F00", "#764000", "#E19E57", "#020570", "#3165B1", "#B8F7FE"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "werpals"],
  background: "white",
  source: "werpals (via paletteer)"
} satisfies PaletteSource;

export default palette;
