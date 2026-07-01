import type { PaletteSource } from "../types";

const palette = {
  name: "excel Slice",
  description: "Qualitative palette “excel Slice” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#052F61", "#A50E82", "#14967C", "#6A9E1F", "#E87D37", "#C62324"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
