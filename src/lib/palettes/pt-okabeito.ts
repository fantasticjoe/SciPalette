import type { PaletteSource } from "../types";

const palette = {
  name: "OkabeIto",
  description: "Qualitative palette “OkabeIto” from the colorblindr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E69F00", "#56B4E9", "#009E73", "#F0E442", "#0072B2", "#D55E00", "#CC79A7", "#999999"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "colorblindr"],
  background: "white",
  source: "colorblindr (via paletteer)"
} satisfies PaletteSource;

export default palette;
