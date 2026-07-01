import type { PaletteSource } from "../types";

const palette = {
  name: "Andri",
  description: "Qualitative palette “Andri” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F56455", "#15134B", "#87C785", "#572F30"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
