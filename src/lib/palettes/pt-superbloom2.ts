import type { PaletteSource } from "../types";

const palette = {
  name: "superbloom2",
  description: "Qualitative palette “superbloom2” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DE7424", "#F5CA37", "#AD8D26", "#496849", "#654783"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
