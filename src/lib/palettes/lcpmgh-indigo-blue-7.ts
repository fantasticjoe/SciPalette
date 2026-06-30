import type { PaletteSource } from "../types";

const palette = {
  name: "Indigo Blue 7",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#87A4EA", "#898CF3", "#9881F3", "#A1C6E0", "#B6D3CF", "#D0BEB0", "#D7D1C5"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
