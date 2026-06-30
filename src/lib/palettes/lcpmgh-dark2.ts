import type { PaletteSource } from "../types";

const palette = {
  name: "Dark2",
  description: "Dark2 qualitative palette from R's base color collection (grDevices).",
  category: "categorical",
  colors: ["#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "r-base"],
  background: "white",
  source: "R grDevices — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
