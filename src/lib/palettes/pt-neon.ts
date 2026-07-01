import type { PaletteSource } from "../types";

const palette = {
  name: "neon",
  description: "Qualitative palette “neon” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FFFF00", "#00FF00", "#F74ED6", "#0000FF"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
