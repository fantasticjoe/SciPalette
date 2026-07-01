import type { PaletteSource } from "../types";

const palette = {
  name: "Hokusai3",
  description: "Qualitative palette “Hokusai3” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D8D97A", "#95C36E", "#74C8C3", "#5A97C1", "#295384", "#0A2E57"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
