import type { PaletteSource } from "../types";

const palette = {
  name: "Juarez",
  description: "Qualitative palette “Juarez” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A82203", "#208CC0", "#F1AF3A", "#CF5E4E", "#637B31", "#003967"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
