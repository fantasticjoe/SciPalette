import type { PaletteSource } from "../types";

const palette = {
  name: "cars",
  description: "Qualitative palette “cars” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E7B08F", "#884C49", "#E0363A", "#6A1D1A", "#9DDAE6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
