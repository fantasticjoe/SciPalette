import type { PaletteSource } from "../types";

const palette = {
  name: "caqu",
  description: "Qualitative palette “caqu” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E6DECC", "#F3E3C2", "#8F96A6", "#625D55", "#501F16"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
