import type { PaletteSource } from "../types";

const palette = {
  name: "google",
  description: "Qualitative palette “google” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3D79F3", "#E6352F", "#F9B90A", "#34A74B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
