import type { PaletteSource } from "../types";

const palette = {
  name: "Yellowstone",
  description: "Qualitative palette “Yellowstone” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#8CBEB1", "#FAFAF2", "#EEEAA0", "#999275", "#E8C533", "#3A5836"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
