import type { PaletteSource } from "../types";

const palette = {
  name: "Redwoods",
  description: "Qualitative palette “Redwoods” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#769370", "#BDB2A7", "#F1C646", "#6E687E", "#F17236"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
