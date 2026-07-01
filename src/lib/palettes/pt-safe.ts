import type { PaletteSource } from "../types";

const palette = {
  name: "Safe",
  description: "Qualitative palette “Safe” from the rcartocolor collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#88CCEE", "#CC6677", "#DDCC77", "#117733", "#332288", "#AA4499", "#44AA99", "#999933", "#882255", "#661100", "#6699CC", "#888888"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
