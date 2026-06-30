import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Orange Green 7",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#9DD3AF", "#C0E2CA", "#D1B494", "#D9EEDF", "#E0C79F", "#F1DEBD", "#FFFBD5"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
