import type { PaletteSource } from "../types";

const palette = {
  name: "Acadia",
  description: "Qualitative palette “Acadia” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FED789", "#023743", "#72874E", "#476F84", "#A4BED5", "#453947"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
