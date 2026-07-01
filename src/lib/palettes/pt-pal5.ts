import type { PaletteSource } from "../types";

const palette = {
  name: "pal5",
  description: "Qualitative palette “pal5” from the jcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#628395", "#C5D86D", "#DB2763", "#17377A", "#FC471E", "#55DDE0"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
