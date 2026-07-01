import type { PaletteSource } from "../types";

const palette = {
  name: "Zissou1",
  description: "Qualitative palette “Zissou1” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3B9AB2", "#78B7C5", "#EBCC2A", "#E1AF00", "#F21A00"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
