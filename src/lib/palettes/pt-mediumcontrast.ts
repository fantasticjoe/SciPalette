import type { PaletteSource } from "../types";

const palette = {
  name: "mediumcontrast",
  description: "Qualitative palette “mediumcontrast” from the khroma collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EECC66", "#EE99AA", "#6699CC", "#997700", "#994455", "#004488"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "khroma"],
  background: "white",
  source: "khroma (via paletteer)"
} satisfies PaletteSource;

export default palette;
