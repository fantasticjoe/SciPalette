import type { PaletteSource } from "../types";

const palette = {
  name: "RoyLichtenstein 1",
  description: "Qualitative palette “RoyLichtenstein 1” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#00020E", "#FFDE01", "#A5BAD6", "#F1C9C7", "#BD0304"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
