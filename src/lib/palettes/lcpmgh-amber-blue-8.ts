import type { PaletteSource } from "../types";

const palette = {
  name: "Amber Blue 8",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#92B9BE", "#949B93", "#A9D3AD", "#CDE3A5", "#E7F5F6", "#F4F7FE", "#F5DF4D", "#F6F8F7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
