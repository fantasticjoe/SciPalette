import type { PaletteSource } from "../types";

const palette = {
  name: "Red Cyan 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#008E8A", "#176A7A", "#2E4857", "#39B086", "#88CF73", "#DDE554", "#DFE662", "#E00200", "#F8AF62"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
