import type { PaletteSource } from "../types";

const palette = {
  name: "Blue Orange Pink 8",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#0000FF", "#5E8FC5", "#79C5CE", "#B9DBF4", "#CE6090", "#EEF4FB", "#F15A22", "#F9A31A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
