import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Green 7",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#098036", "#4B57A2", "#D3D3D3", "#EE7D80", "#F9BE80", "#FCDFC0"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
