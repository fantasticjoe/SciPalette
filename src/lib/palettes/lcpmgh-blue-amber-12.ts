import type { PaletteSource } from "../types";

const palette = {
  name: "Blue Amber 12",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#0072BD", "#08306B", "#08519C", "#2171B5", "#6BAED6", "#77AC30", "#969696", "#C6DBEF", "#D95319", "#EDB120", "#FED976", "#FFFFCC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
