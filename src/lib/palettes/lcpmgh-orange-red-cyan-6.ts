import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Red Cyan 6",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#B2DBB9", "#B8E5FA", "#EEC186", "#EEF0A7", "#F7A6AC", "#F7B7D2"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
