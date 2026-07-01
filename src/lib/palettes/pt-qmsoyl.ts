import type { PaletteSource } from "../types";

const palette = {
  name: "qMSOYl",
  description: "Qualitative palette “qMSOYl” from the Redmonder collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E5DEDB", "#39302A", "#E1CA08", "#F8931D", "#CE8D3E", "#EC7016", "#E64823", "#9C6A6A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
