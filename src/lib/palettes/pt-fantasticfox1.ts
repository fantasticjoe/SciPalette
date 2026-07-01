import type { PaletteSource } from "../types";

const palette = {
  name: "FantasticFox1",
  description: "Qualitative palette “FantasticFox1” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DD8D29", "#E2D200", "#46ACC8", "#E58601", "#B40F20"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
