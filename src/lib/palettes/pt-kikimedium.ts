import type { PaletteSource } from "../types";

const palette = {
  name: "KikiMedium",
  description: "Qualitative palette “KikiMedium” from the ghibli collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1C1A1F", "#333544", "#B50A2A", "#0E84B4", "#9E8356", "#7EBAC2", "#D1B79E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ghibli"],
  background: "white",
  source: "ghibli (via paletteer)"
} satisfies PaletteSource;

export default palette;
