import type { PaletteSource } from "../types";

const palette = {
  name: "Royal1",
  description: "Qualitative palette “Royal1” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#899DA4", "#C93312", "#FAEFD1", "#DC863B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
