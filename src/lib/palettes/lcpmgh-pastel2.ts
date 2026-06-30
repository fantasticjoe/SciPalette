import type { PaletteSource } from "../types";

const palette = {
  name: "Pastel2",
  description: "Pastel2 qualitative palette from R's base color collection (grDevices).",
  category: "categorical",
  colors: ["#B3E2CD", "#FDCDAC", "#CBD5E8", "#F4CAE4", "#E6F5C9", "#FFF2AE", "#F1E2CC", "#CCCCCC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "r-base"],
  background: "white",
  source: "R grDevices — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
