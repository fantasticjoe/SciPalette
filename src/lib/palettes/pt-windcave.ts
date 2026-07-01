import type { PaletteSource } from "../types";

const palette = {
  name: "WindCave",
  description: "Qualitative palette “WindCave” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#2F100E", "#6C3322", "#B07159", "#C9A197", "#E0CDCD"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
