import type { PaletteSource } from "../types";

const palette = {
  name: "Blue Red 5",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#7399F4", "#7AB656", "#925EB0", "#A5AEB7", "#CC7C71"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
