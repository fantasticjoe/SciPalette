import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Orange Lime 7",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#349F2B", "#666666", "#66A61E", "#A5761C", "#B2DF8A", "#CCCCCC", "#E5AB02"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
