import type { PaletteSource } from "../types";

const palette = {
  name: "Pastel1",
  description: "Pastel1 qualitative palette from R's base color collection (grDevices).",
  category: "categorical",
  colors: ["#FBB4AE", "#B3CDE3", "#CCEBC5", "#DECBE4", "#FED9A6", "#FFFFCC", "#E5D8BD", "#FDDAEC", "#F2F2F2"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "r-base"],
  background: "white",
  source: "R grDevices — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
