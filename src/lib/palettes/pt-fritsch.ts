import type { PaletteSource } from "../types";

const palette = {
  name: "Fritsch",
  description: "Qualitative palette “Fritsch” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#0F8D7B", "#8942BD", "#1E1A1A", "#EADD17"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
