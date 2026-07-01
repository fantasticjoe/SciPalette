import type { PaletteSource } from "../types";

const palette = {
  name: "Mango",
  description: "Qualitative palette “Mango” from the LaCroixColoR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FF5300", "#9ED80B", "#43B629", "#1BB6AF", "#8F92A1", "#172869"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
