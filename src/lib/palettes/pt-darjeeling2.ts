import type { PaletteSource } from "../types";

const palette = {
  name: "Darjeeling2",
  description: "Qualitative palette “Darjeeling2” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#ECCBAE", "#046C9A", "#D69C4E", "#ABDDDE", "#000000"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
