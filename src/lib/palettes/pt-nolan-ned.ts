import type { PaletteSource } from "../types";

const palette = {
  name: "nolan ned",
  description: "Qualitative palette “nolan ned” from the ochRe collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A89030", "#004878", "#78A890", "#000000", "#481800"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ochre"],
  background: "white",
  source: "ochRe (via paletteer)"
} satisfies PaletteSource;

export default palette;
