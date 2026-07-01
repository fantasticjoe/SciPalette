import type { PaletteSource } from "../types";

const palette = {
  name: "starry2",
  description: "Qualitative palette “starry2” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#323232", "#1B6393", "#FCD351", "#C7E3CC", "#F8EEC1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
