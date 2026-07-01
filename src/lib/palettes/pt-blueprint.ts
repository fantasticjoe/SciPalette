import type { PaletteSource } from "../types";

const palette = {
  name: "blueprint",
  description: "Qualitative palette “blueprint” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FFFFFF", "#366699", "#000000", "#003366"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
