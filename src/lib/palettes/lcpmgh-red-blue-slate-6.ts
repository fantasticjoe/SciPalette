import type { PaletteSource } from "../types";

const palette = {
  name: "Red Blue Slate 6",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#2481C4", "#8A8A88", "#C4C2DA", "#C7C7C5", "#DE061E", "#F7D8D6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
