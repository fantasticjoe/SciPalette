import type { PaletteSource } from "../types";

const palette = {
  name: "Beach",
  description: "Qualitative palette “Beach” from the PrettyCols collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#0E7C7B", "#17BEBB", "#D4F4DD", "#D62246", "#4B1D3F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
