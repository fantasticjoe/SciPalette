import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Orange 8",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#4E606E", "#6A8864", "#9E5648", "#A56B45", "#B5BCC2", "#B7C685", "#BD8A99", "#CDBB71"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
