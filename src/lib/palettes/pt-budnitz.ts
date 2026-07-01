import type { PaletteSource } from "../types";

const palette = {
  name: "Budnitz",
  description: "Qualitative palette “Budnitz” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#86DD45", "#F6E71C", "#FDA900", "#FD5300", "#57348B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
