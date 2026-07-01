import type { PaletteSource } from "../types";

const palette = {
  name: "Lakota",
  description: "Qualitative palette “Lakota” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#04A3BD", "#F0BE3D", "#931E18", "#DA7901", "#247D3F", "#20235B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
