import type { PaletteSource } from "../types";

const palette = {
  name: "lake",
  description: "Qualitative palette “lake” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#CECEB9", "#7AC9B7", "#6CA184", "#3793EC", "#2A3927"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
