import type { PaletteSource } from "../types";

const palette = {
  name: "Moonrise1",
  description: "Qualitative palette “Moonrise1” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F3DF6C", "#CEAB07", "#D5D5D3", "#24281A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
