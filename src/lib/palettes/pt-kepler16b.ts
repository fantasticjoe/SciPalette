import type { PaletteSource } from "../types";

const palette = {
  name: "kepler16b",
  description: "Qualitative palette “kepler16b” from the futurevisions collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FEFEFE", "#FFEFA9", "#FAAC51", "#6A5188", "#C77998", "#A24745", "#462F2F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
