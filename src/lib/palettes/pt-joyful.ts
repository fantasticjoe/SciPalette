import type { PaletteSource } from "../types";

const palette = {
  name: "Joyful",
  description: "Qualitative palette “Joyful” from the PrettyCols collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#80A1C1", "#C94277", "#EEE3AB", "#274C77", "#5E8C61"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
