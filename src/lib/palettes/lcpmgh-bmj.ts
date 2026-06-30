import type { PaletteSource } from "../types";

const palette = {
  name: "BMJ",
  description: "Discrete qualitative palette in the BMJ journal style, as packaged in ggsci. Ideal for multi-group comparisons in publication figures.",
  category: "categorical",
  colors: ["#2A6EBB", "#F0AB00", "#C50084", "#7D5CC6", "#E37222", "#69BE28", "#00B2A9", "#CD202C", "#747678"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["publication", "categorical", "multi-group", "lcpmgh", "journal"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
