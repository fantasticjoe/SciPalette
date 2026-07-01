import type { PaletteSource } from "../types";

const palette = {
  name: "southpark",
  description: "Qualitative palette “southpark” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#2F86FF", "#EBAB16", "#DE0012", "#22C408", "#FECDAA", "#F14809"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
