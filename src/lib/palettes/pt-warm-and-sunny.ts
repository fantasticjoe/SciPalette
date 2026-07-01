import type { PaletteSource } from "../types";

const palette = {
  name: "warm and sunny",
  description: "Qualitative palette “warm and sunny” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F94040", "#FF6000", "#FFFF06", "#FCA92E", "#000000", "#FFC080", "#FF8000", "#CE0665"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
