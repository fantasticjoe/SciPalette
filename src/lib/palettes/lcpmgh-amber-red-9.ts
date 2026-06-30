import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Red 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#ABD1BC", "#BED0F9", "#CCCC99", "#DBE4FB", "#E3BBED", "#EDC3A5", "#F1F1F1", "#FCB6A5", "#FDEBAA"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
