import type { PaletteSource } from "../types";

const palette = {
  name: "PaulKlee 1",
  description: "Qualitative palette “PaulKlee 1” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#4F51FE", "#8C1E92", "#FF4E0B", "#CD2019", "#441C21"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
