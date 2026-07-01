import type { PaletteSource } from "../types";

const palette = {
  name: "JacksonPollock",
  description: "Qualitative palette “JacksonPollock” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D89CA9", "#1962A0", "#F1ECD7", "#E8C051", "#1A1C23"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
