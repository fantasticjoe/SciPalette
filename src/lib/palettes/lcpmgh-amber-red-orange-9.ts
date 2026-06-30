import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Red Orange 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#5BA9BD", "#95BE54", "#9D6067", "#A93935", "#B0783D", "#D5A6A0", "#DBCC57", "#DCDE8B", "#E0BB6D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
