import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Blue 14",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#0000FE", "#00688B", "#01008A", "#1E90FF", "#228B22", "#566B30", "#698B6A", "#8370FE", "#8B8378", "#8B864E", "#A020EF", "#FE0000", "#FF7F00", "#FFB90F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
