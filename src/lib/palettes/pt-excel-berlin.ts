import type { PaletteSource } from "../types";

const palette = {
  name: "excel Berlin",
  description: "Qualitative palette “excel Berlin” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F09415", "#C1B56B", "#4BAF73", "#5AA6C0", "#D17DF9", "#FA7E5C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
