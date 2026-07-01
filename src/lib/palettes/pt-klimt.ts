import type { PaletteSource } from "../types";

const palette = {
  name: "Klimt",
  description: "Qualitative palette “Klimt” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DF9ED4", "#C93F55", "#EACC62", "#469D76", "#3C4B99", "#924099"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
