import type { PaletteSource } from "../types";

const palette = {
  name: "AndyWarhol 2",
  description: "Qualitative palette “AndyWarhol 2” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D32934", "#2F191B", "#2BAA92", "#D12E6C", "#F4BCB9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
