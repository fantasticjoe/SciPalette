import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Cyan 6",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#36A9E1", "#5C6572", "#ADB2B9", "#C2E5F6", "#EB5B25", "#F5AD92"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
