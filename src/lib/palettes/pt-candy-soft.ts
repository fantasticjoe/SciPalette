import type { PaletteSource } from "../types";

const palette = {
  name: "candy soft",
  description: "Qualitative palette “candy soft” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FF8080", "#FFA040", "#C0C000", "#00C000", "#55A0FB", "#AD07E3"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
