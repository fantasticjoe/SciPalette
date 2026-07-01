import type { PaletteSource } from "../types";

const palette = {
  name: "Denali",
  description: "Qualitative palette “Denali” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#73979D", "#DADCD7", "#43200E", "#E16509", "#747669"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
