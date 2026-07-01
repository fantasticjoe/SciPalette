import type { PaletteSource } from "../types";

const palette = {
  name: "venus",
  description: "Qualitative palette “venus” from the futurevisions collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EDB992", "#FEF9F4", "#6B8A8D", "#ABAAA6", "#4B5453"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
