import type { PaletteSource } from "../types";

const palette = {
  name: "GeneDavis",
  description: "Qualitative palette “GeneDavis” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#293757", "#568D4B", "#D5BB56", "#D26A1B", "#A41D1A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
