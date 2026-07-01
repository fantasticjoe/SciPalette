import type { PaletteSource } from "../types";

const palette = {
  name: "PairedColor12Steps",
  description: "Qualitative palette “PairedColor12Steps” from the colorBlindness collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FFBF7F", "#FF7F00", "#FFFF99", "#FFFF32", "#B2FF8C", "#32FF00", "#A5EDFF", "#19B2FF", "#CCBFFF", "#654CFF", "#FF99BF", "#E51932"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "colorblindness"],
  background: "white",
  source: "colorBlindness (via paletteer)"
} satisfies PaletteSource;

export default palette;
