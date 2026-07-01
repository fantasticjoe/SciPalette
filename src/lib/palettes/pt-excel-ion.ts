import type { PaletteSource } from "../types";

const palette = {
  name: "excel Ion",
  description: "Qualitative palette “excel Ion” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B01513", "#EA6312", "#E6B729", "#6AAC90", "#54849A", "#9E5E9B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
