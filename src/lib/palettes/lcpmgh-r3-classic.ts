import type { PaletteSource } from "../types";

const palette = {
  name: "R3 Classic",
  description: "R3 Classic qualitative palette from R's base color collection (grDevices).",
  category: "categorical",
  colors: ["#000000", "#FF0000", "#00CD00", "#0000FF", "#00FFFF", "#FF00FF", "#FFFF00", "#BEBEBE"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "r-base"],
  background: "white",
  source: "R grDevices — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
