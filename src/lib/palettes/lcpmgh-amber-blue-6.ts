import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Blue 6",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#1F77B4", "#282973", "#47A1A2", "#708090", "#DAA628", "#F9BFCB"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
