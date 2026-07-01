import type { PaletteSource } from "../types";

const palette = {
  name: "Arches",
  description: "Qualitative palette “Arches” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A8CDEC", "#F6955E", "#682C37", "#9B6981", "#7887A4", "#A89F8E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
