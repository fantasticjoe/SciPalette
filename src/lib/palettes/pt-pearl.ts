import type { PaletteSource } from "../types";

const palette = {
  name: "pearl",
  description: "Qualitative palette “pearl” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#4D402F", "#22456F", "#B63530", "#85827A", "#705443"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
