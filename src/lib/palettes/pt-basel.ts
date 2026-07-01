import type { PaletteSource } from "../types";

const palette = {
  name: "basel",
  description: "Qualitative palette “basel” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#0C5BB0", "#EE0011", "#15983D", "#EC579A", "#FA6B09", "#149BED", "#A1C720", "#FEC10B", "#16A08C", "#9A703E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
