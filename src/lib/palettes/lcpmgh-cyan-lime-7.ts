import type { PaletteSource } from "../types";

const palette = {
  name: "Cyan Lime 7",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#004600", "#18BECF", "#78B428", "#7F7F7F", "#BCBD23", "#C8E63C", "#FFE494"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
