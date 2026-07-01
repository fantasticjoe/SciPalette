import type { PaletteSource } from "../types";

const palette = {
  name: "pal9",
  description: "Qualitative palette “pal9” from the jcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#273B5B", "#C1C243", "#E73E26", "#2E6657", "#E8F5B3", "#24A99C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
