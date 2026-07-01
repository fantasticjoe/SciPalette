import type { PaletteSource } from "../types";

const palette = {
  name: "up",
  description: "Qualitative palette “up” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#5F8CF4", "#DCD6FC", "#E27A48", "#605646", "#434159"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
