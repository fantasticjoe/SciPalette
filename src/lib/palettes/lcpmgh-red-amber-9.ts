import type { PaletteSource } from "../types";

const palette = {
  name: "Red Amber 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#389AB3", "#5CA9BB", "#858786", "#87BBAF", "#CAC658", "#E1B224", "#E7C21C", "#E97123", "#ED2225"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
