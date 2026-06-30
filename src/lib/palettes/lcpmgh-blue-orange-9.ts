import type { PaletteSource } from "../types";

const palette = {
  name: "Blue Orange 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#508D40", "#65A8EC", "#8C4E29", "#96A4C7", "#A9B233", "#B7C6E5", "#D38386", "#DB9C4D", "#DDA5C8"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
