import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Red 11",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#484848", "#666666", "#999999", "#99D1D0", "#9F6BBF", "#A0B3DC", "#BEA4BD", "#CCCCCC", "#CF66A5", "#FAC5C6", "#FCDFC7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
