import type { PaletteSource } from "../types";

const palette = {
  name: "RoyLichtenstein",
  description: "Qualitative palette “RoyLichtenstein” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3229AD", "#BC000E", "#E7CFB7", "#FFEC04", "#090109"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
