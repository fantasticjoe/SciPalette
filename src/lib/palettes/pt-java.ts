import type { PaletteSource } from "../types";

const palette = {
  name: "Java",
  description: "Qualitative palette “Java” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#663171", "#CF3A36", "#EA7428", "#E2998A", "#0C7156"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
