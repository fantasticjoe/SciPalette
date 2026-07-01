import type { PaletteSource } from "../types";

const palette = {
  name: "ArcticGates",
  description: "Qualitative palette “ArcticGates” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F4E7C5", "#678096", "#ACC2CF", "#979461", "#CD5733", "#A12A19"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
