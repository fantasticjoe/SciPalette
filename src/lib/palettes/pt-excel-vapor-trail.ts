import type { PaletteSource } from "../types";

const palette = {
  name: "excel Vapor Trail",
  description: "Qualitative palette “excel Vapor Trail” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DF2E28", "#FE801A", "#E9BF35", "#81BB42", "#32C7A9", "#4A9BDC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
