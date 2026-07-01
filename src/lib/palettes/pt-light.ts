import type { PaletteSource } from "../types";

const palette = {
  name: "Light",
  description: "Qualitative palette “Light” from the PrettyCols collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#97B9CB", "#9057C6", "#FFE1BD", "#8DC657", "#F03A9C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
