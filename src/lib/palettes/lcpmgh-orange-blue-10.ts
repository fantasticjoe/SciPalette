import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Blue 10",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#40B0A6", "#6D8EF7", "#6E579A", "#A38E89", "#A5C8DD", "#CD5582", "#E1BE6A", "#E1BE6A", "#E89A7A", "#EC6B2D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
