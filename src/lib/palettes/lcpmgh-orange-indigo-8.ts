import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Indigo 8",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#283D7E", "#467D80", "#4F8B57", "#5291B2", "#7347BA", "#91CC7A", "#D8A266"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
