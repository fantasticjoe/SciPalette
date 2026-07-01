import type { PaletteSource } from "../types";

const palette = {
  name: "ClaesOldenburg",
  description: "Qualitative palette “ClaesOldenburg” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#95B1C9", "#263656", "#698946", "#F8D440", "#C82720"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
