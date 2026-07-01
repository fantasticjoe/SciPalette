import type { PaletteSource } from "../types";

const palette = {
  name: "xmen",
  description: "Qualitative palette “xmen” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#026CCB", "#F51E02", "#05B102", "#FB9F53", "#9B9B9B", "#FB82BE", "#BA6222", "#EEC229"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
