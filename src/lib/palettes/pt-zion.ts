import type { PaletteSource } from "../types";

const palette = {
  name: "Zion",
  description: "Qualitative palette “Zion” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#469BEC", "#C9FAFF", "#F1E3B6", "#C4878C", "#6D882B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
