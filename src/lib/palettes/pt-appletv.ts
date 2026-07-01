import type { PaletteSource } from "../types";

const palette = {
  name: "appletv",
  description: "Qualitative palette “appletv” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#5FB233", "#6A7F93", "#F57206", "#EB0F13", "#8F2F8B", "#1396DB"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
