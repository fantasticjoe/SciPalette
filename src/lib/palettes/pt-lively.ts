import type { PaletteSource } from "../types";

const palette = {
  name: "Lively",
  description: "Qualitative palette “Lively” from the PrettyCols collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#413C58", "#D1495B", "#EDAE49", "#00798C", "#003D5B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
