import type { PaletteSource } from "../types";

const palette = {
  name: "NPG (Nature)",
  description: "Discrete qualitative palette in the NPG (Nature) journal style, as packaged in ggsci. Ideal for multi-group comparisons in publication figures.",
  category: "categorical",
  colors: ["#E64B35", "#4DBBD5", "#00A087", "#3C5488", "#F39B7F", "#8491B4", "#91D1C2", "#DC0000", "#7E6148", "#B09C85"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["publication", "categorical", "multi-group", "lcpmgh", "journal"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
