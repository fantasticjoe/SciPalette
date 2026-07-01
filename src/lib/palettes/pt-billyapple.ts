import type { PaletteSource } from "../types";

const palette = {
  name: "BillyApple",
  description: "Qualitative palette “BillyApple” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F24D98", "#813B7C", "#59D044", "#F3A002", "#F2F44D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
