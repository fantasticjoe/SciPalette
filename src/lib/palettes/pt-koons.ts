import type { PaletteSource } from "../types";

const palette = {
  name: "Koons",
  description: "Qualitative palette “Koons” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D8537D", "#6DC5B2", "#EECA76", "#5D2314", "#B5282A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
