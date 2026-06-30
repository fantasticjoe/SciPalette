import type { PaletteSource } from "../types";

const palette = {
  name: "GSEA",
  description: "Discrete qualitative palette in the GSEA journal style, as packaged in ggsci. Ideal for multi-group comparisons in publication figures.",
  category: "categorical",
  colors: ["#4500AC", "#2600D1", "#6B58EE", "#8787FF", "#C6C0FF", "#D4D4FF", "#FFBFE5", "#FF8888", "#FF707F", "#FF5959", "#EE3F3F", "#D60C00"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["publication", "categorical", "multi-group", "lcpmgh", "journal"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
