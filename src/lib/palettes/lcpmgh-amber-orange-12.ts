import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Orange 12",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#654E5E", "#78828B", "#A49193", "#B5C9BE", "#C89D94", "#D3DCE3", "#D6E3D2", "#DECCA6", "#E0DEDF", "#EDE7D9", "#EFE1D6", "#F3E3E3"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
