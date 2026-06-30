import type { PaletteSource } from "../types";

const palette = {
  name: "R4 Modern",
  description: "R4 Modern qualitative palette from R's base color collection (grDevices).",
  category: "categorical",
  colors: ["#000000", "#DF536B", "#61D04F", "#2297E6", "#28E2E5", "#CD0BBC", "#F5C710", "#9E9E9E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "r-base"],
  background: "white",
  source: "R grDevices — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
