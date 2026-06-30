import type { PaletteSource } from "../types";

const palette = {
  name: "Indigo Red 11",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#2900F2", "#75AAB8", "#8985B7", "#A04646", "#A3C98E", "#AE3019", "#B3C4D4", "#B58C9A", "#CFC580", "#DCCB59", "#E8DF92"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
