import type { PaletteSource } from "../types";

const palette = {
  name: "Red Amber Blue 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#75B0B4", "#806CAB", "#869C76", "#AD4641", "#AFAFAD", "#AFC9A6", "#B4C4E5", "#D19692", "#DED0A1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
