import type { PaletteSource } from "../types";

const palette = {
  name: "Accent",
  description: "Accent qualitative palette from R's base color collection (grDevices).",
  category: "categorical",
  colors: ["#7FC97F", "#BEAED4", "#FDC086", "#FFFF99", "#386CB0", "#F0027F", "#BF5B17", "#666666"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "r-base"],
  background: "white",
  source: "R grDevices — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
