import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Red Indigo 6",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#8BABD3", "#A58BD4", "#ADDEAD", "#D7B0B0", "#DDAF70", "#DE767C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
