import type { PaletteSource } from "../types";

const palette = {
  name: "Cyan Red 8",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#7DC69B", "#9BD7F3", "#D5EAD9", "#D8EEFB", "#DCD7EB", "#F2A1A7", "#FBDDDD", "#FCE6CF"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
