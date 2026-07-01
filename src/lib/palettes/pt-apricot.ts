import type { PaletteSource } from "../types";

const palette = {
  name: "Apricot",
  description: "Qualitative palette “Apricot” from the LaCroixColoR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D72000", "#EE6100", "#FFAD0A", "#1BB6AF", "#9093A2", "#132157"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
