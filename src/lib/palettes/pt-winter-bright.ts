import type { PaletteSource } from "../types";

const palette = {
  name: "winter bright",
  description: "Qualitative palette “winter bright” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#077E97", "#800080", "#000080", "#8D8DFF", "#C000C0", "#056943"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
