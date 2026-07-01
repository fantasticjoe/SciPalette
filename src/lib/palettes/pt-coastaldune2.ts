import type { PaletteSource } from "../types";

const palette = {
  name: "coastaldune2",
  description: "Qualitative palette “coastaldune2” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E2D78A", "#E4B3E2", "#90816E", "#523833", "#372E21"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
