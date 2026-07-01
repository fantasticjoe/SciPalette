import type { PaletteSource } from "../types";

const palette = {
  name: "Veronese",
  description: "Qualitative palette “Veronese” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#67322E", "#99610A", "#C38F16", "#6E948C", "#2C6B67", "#175449", "#122C43"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
