import type { PaletteSource } from "../types";

const palette = {
  name: "Rushmore",
  description: "Qualitative palette “Rushmore” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E1BD6D", "#EABE94", "#0B775E", "#35274A", "#F2300F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
