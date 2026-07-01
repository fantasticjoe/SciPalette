import type { PaletteSource } from "../types";

const palette = {
  name: "stained glass",
  description: "Qualitative palette “stained glass” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FF0000", "#FFFF00", "#00FF00", "#55A0FB", "#B856D7", "#F74ED6", "#FF8000", "#0000C0", "#00C000"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
