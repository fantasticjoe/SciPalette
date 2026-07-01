import type { PaletteSource } from "../types";

const palette = {
  name: "pal2",
  description: "Qualitative palette “pal2” from the jcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3E71A8", "#CEFF1A", "#870E75", "#FE6900", "#0BB19F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
