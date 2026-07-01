import type { PaletteSource } from "../types";

const palette = {
  name: "Darjeeling1",
  description: "Qualitative palette “Darjeeling1” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FF0000", "#00A08A", "#F2AD00", "#F98400", "#5BBCD6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
