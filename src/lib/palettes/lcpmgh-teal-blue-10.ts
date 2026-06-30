import type { PaletteSource } from "../types";

const palette = {
  name: "Teal Blue 10",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#016450", "#237B7A", "#4592A5", "#67A9CF", "#7D4C99", "#8AB6D7", "#9FAAD1", "#ADC4DE", "#D0D1E6", "#D0DAEB"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
