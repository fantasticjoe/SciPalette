import type { PaletteSource } from "../types";

const palette = {
  name: "excel Organic",
  description: "Qualitative palette “excel Organic” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#83992A", "#3C9770", "#44709D", "#A23C33", "#D97828", "#DEB340"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
