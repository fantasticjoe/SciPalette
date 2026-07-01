import type { PaletteSource } from "../types";

const palette = {
  name: "Degas",
  description: "Qualitative palette “Degas” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#591D06", "#96410E", "#E5A335", "#556219", "#418979", "#2B614E", "#053C29"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
