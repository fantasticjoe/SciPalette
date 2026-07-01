import type { PaletteSource } from "../types";

const palette = {
  name: "blueprint2",
  description: "Qualitative palette “blueprint2” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FFFFFF", "#C8DEF9", "#99CCFF", "#366699"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
