import type { PaletteSource } from "../types";

const palette = {
  name: "Sidhu",
  description: "Qualitative palette “Sidhu” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#AF4646", "#762B35", "#005187", "#251C4A", "#78ADB7", "#4C9A77", "#1B7975"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
