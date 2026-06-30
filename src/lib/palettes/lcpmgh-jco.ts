import type { PaletteSource } from "../types";

const palette = {
  name: "JCO",
  description: "Discrete qualitative palette in the JCO journal style, as packaged in ggsci. Ideal for multi-group comparisons in publication figures.",
  category: "categorical",
  colors: ["#0073C2", "#EFC000", "#868686", "#CD534C", "#7AA6DC", "#003C67", "#8F7700", "#3B3B3B", "#A73030", "#4A6990"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["publication", "categorical", "multi-group", "lcpmgh", "journal"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
