import type { PaletteSource } from "../types";

const palette = {
  name: "shades of gray",
  description: "Qualitative palette “shades of gray” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#A0A0A4", "#808080", "#606060"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
