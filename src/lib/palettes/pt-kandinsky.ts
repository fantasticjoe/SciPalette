import type { PaletteSource } from "../types";

const palette = {
  name: "Kandinsky",
  description: "Qualitative palette “Kandinsky” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3B7C70", "#CE9642", "#898E9F", "#3B3A3E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
