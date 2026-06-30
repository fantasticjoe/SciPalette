import type { PaletteSource } from "../types";

const palette = {
  name: "Violet Blue 6",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#099A63", "#55A0FB", "#91BFFA", "#A09FA4", "#AD07E3", "#FEA0A0"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
