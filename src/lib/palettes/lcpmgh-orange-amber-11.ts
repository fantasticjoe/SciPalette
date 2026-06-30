import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Amber 11",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#596AAF", "#75A6DE", "#75AD8A", "#7EB1A0", "#A4C962", "#B0CBE6", "#B3D250", "#C8795A", "#D0813C", "#D4C649", "#DEBB5D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
