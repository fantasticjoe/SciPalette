import type { PaletteSource } from "../types";

const palette = {
  name: "Palermo",
  description: "Qualitative palette “Palermo” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1B80AD", "#EA5B57", "#9C5555", "#0C3C5F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
