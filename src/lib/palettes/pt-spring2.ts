import type { PaletteSource } from "../types";

const palette = {
  name: "spring2",
  description: "Qualitative palette “spring2” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1E90FF", "#FFFFFF", "#FFFF00", "#FFCC00", "#90EE90", "#33CC00", "#CC6699", "#FF99FF", "#9DF8FF"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
