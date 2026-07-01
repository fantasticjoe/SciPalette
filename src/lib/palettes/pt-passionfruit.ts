import type { PaletteSource } from "../types";

const palette = {
  name: "PassionFruit",
  description: "Qualitative palette “PassionFruit” from the LaCroixColoR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C70E7B", "#FC6882", "#A6E000", "#1BB6AF", "#6C6C9D", "#172869"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
