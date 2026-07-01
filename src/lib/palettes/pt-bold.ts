import type { PaletteSource } from "../types";

const palette = {
  name: "Bold",
  description: "Qualitative palette “Bold” from the PrettyCols collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#6497B1", "#6A359C", "#FFB04F", "#679C35", "#CD1076"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
