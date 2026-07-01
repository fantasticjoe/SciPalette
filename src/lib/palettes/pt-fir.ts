import type { PaletteSource } from "../types";

const palette = {
  name: "fir",
  description: "Qualitative palette “fir” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#336666", "#20B2AA", "#99CCCC", "#000000"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
