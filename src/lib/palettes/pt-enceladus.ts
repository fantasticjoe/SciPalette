import type { PaletteSource } from "../types";

const palette = {
  name: "enceladus",
  description: "Qualitative palette “enceladus” from the futurevisions collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1C1113", "#1A2A29", "#D1DCCE", "#CE512C", "#5D1722"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
