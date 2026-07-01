import type { PaletteSource } from "../types";

const palette = {
  name: "Ohchi",
  description: "Qualitative palette “Ohchi” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#582851", "#40606D", "#69A257", "#E3D19C", "#C4024D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
