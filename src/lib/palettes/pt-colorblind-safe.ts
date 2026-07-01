import type { PaletteSource } from "../types";

const palette = {
  name: "colorblind safe",
  description: "Qualitative palette “colorblind safe” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#FF0066", "#107F80", "#40007F", "#AA66FF", "#66CCFE"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
