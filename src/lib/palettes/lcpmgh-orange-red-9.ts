import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Red 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#666666", "#808080", "#9BADB2", "#A02C2C", "#CCBCBC", "#CCCCCC", "#E5DEDE", "#F4E3D7", "#FFB889"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
