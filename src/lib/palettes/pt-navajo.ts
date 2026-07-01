import type { PaletteSource } from "../types";

const palette = {
  name: "Navajo",
  description: "Qualitative palette “Navajo” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#660D20", "#E59A52", "#EDCE79", "#094568", "#E1C59A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
