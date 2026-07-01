import type { PaletteSource } from "../types";

const palette = {
  name: "Austria",
  description: "Qualitative palette “Austria” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A40000", "#16317D", "#007E2F", "#FFCD12", "#B86092", "#721B3E", "#00B7A7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
