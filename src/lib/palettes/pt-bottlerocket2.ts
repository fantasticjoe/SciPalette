import type { PaletteSource } from "../types";

const palette = {
  name: "BottleRocket2",
  description: "Qualitative palette “BottleRocket2” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FAD510", "#CB2314", "#273046", "#354823", "#1E1E1E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
