import type { PaletteSource } from "../types";

const palette = {
  name: "Magenta Red 7",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#581036", "#6E8E9D", "#777777", "#97A4AA", "#A65655", "#B98E95", "#F3EAE1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
