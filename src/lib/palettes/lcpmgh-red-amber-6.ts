import type { PaletteSource } from "../types";

const palette = {
  name: "Red Amber 6",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#377EB8", "#BFBFBF", "#D2EBD2", "#E1F3FA", "#E41A1C", "#FFF0B1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
