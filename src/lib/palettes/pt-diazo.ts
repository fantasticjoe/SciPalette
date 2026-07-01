import type { PaletteSource } from "../types";

const palette = {
  name: "diazo",
  description: "Qualitative palette “diazo” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C8DEF9", "#90BFF9", "#FFFFFF", "#D4D4D4", "#0000FF"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
