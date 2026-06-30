import type { PaletteSource } from "../types";

const palette = {
  name: "Cyan Blue 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#1D91C2", "#205EA7", "#205EA7", "#38B6C4", "#3BB6C5", "#7ECBB9", "#965478", "#C8E2B2", "#EAF0B2"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
