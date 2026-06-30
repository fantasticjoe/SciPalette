import type { PaletteSource } from "../types";

const palette = {
  name: "Blue Orange Green 8",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#1D71B9", "#5AAE61", "#6BAFD6", "#878787", "#9970AC", "#A5761C", "#CBBBA1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
