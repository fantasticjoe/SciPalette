import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Teal 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#008A45", "#468BCA", "#5F5F5E", "#7DD2F6", "#80C5A2", "#B384BA", "#D9C2DD", "#F27873", "#FFD373"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
