import type { PaletteSource } from "../types";

const palette = {
  name: "vonHeyl",
  description: "Qualitative palette “vonHeyl” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F96149", "#FFA479", "#E7D800", "#94AEC2", "#0D0C0B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
