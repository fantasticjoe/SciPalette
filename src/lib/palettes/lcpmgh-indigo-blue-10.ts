import type { PaletteSource } from "../types";

const palette = {
  name: "Indigo Blue 10",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#291173", "#356529", "#611A44", "#629586", "#832F87", "#858A2E", "#95BEEC", "#A75265", "#CBC46A", "#D5D5D5"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
