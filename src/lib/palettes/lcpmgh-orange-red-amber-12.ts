import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Red Amber 12",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#2C6344", "#308192", "#5EA7B8", "#5F9C61", "#61496D", "#A4C97C", "#AED2E2", "#B092B6", "#C74D26", "#CAC1D4", "#E38D26", "#F1CC74"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
