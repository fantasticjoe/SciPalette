import type { PaletteSource } from "../types";

const palette = {
  name: "Dark",
  description: "Qualitative palette “Dark” from the PrettyCols collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#436F85", "#432263", "#DE7A00", "#416322", "#860A4D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
