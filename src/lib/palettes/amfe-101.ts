import type { PaletteSource } from "../types";

const palette = {
  name: "NATURE",
  description: "Community-curated aesthetic palette “NATURE” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#CC247C", "#E95351", "#F7A24F", "#FBEB66", "#4EA660", "#79CAFB", "#5292F7", "#AA77E9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "Nature", "鲜艳", "多色"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
