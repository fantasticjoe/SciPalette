import type { PaletteSource } from "../types";

const palette = {
  name: "Green Orange 8",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#8DAD95", "#9DA190", "#A6BA89", "#C2D794", "#C4A880", "#D0FFB1", "#DAD184", "#EBA782"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
