import type { PaletteSource } from "../types";

const palette = {
  name: "candy bright",
  description: "Qualitative palette “candy bright” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F71480", "#FF8000", "#808000", "#008000", "#0000FF", "#76069A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
