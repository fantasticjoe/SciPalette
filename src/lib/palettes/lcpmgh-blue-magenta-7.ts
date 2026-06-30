import type { PaletteSource } from "../types";

const palette = {
  name: "Blue Magenta 7",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#6295D7", "#67AFD5", "#6AB3A2", "#7488C5", "#95A938", "#AD3688", "#CA645F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
