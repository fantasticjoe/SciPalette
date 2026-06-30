import type { PaletteSource } from "../types";

const palette = {
  name: "Frontiers",
  description: "Discrete qualitative palette in the Frontiers journal style, as packaged in ggsci. Ideal for multi-group comparisons in publication figures.",
  category: "categorical",
  colors: ["#D51317", "#F39200", "#EFD500", "#95C11F", "#007B3D", "#31B7BC", "#0094CD", "#164194", "#6F286A", "#706F6F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["publication", "categorical", "multi-group", "lcpmgh", "journal"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
