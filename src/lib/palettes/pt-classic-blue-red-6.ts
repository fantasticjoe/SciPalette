import type { PaletteSource } from "../types";

const palette = {
  name: "Classic Blue Red 6",
  description: "Qualitative palette “Classic Blue Red 6” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#2C69B0", "#F02720", "#AC613C", "#6BA3D6", "#EA6B73", "#E9C39B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
