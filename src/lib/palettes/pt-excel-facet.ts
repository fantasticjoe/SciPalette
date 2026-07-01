import type { PaletteSource } from "../types";

const palette = {
  name: "excel Facet",
  description: "Qualitative palette “excel Facet” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#90C226", "#54A021", "#E6B91E", "#E76618", "#C42F1A", "#918655"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
