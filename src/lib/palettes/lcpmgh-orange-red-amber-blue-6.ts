import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Red Amber Blue 6",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#80B1D3", "#8DD1C6", "#BDBADB", "#F47F72", "#FBB463", "#FBF8B4"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
