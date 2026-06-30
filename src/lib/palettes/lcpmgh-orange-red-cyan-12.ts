import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Red Cyan 12",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#5861AC", "#6AB4C1", "#6B7EB9", "#70B48F", "#72C3A3", "#A5C2E2", "#F28080", "#FEA040", "#FF6100", "#FF7F00", "#FFC080", "#FFE0C1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
