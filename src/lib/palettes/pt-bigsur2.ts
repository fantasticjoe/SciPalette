import type { PaletteSource } from "../types";

const palette = {
  name: "bigsur2",
  description: "Qualitative palette “bigsur2” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#20618D", "#91AAC4", "#6B6C58", "#464724", "#83932D", "#CAB89F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
