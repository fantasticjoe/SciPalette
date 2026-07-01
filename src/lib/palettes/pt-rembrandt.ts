import type { PaletteSource } from "../types";

const palette = {
  name: "rembrandt",
  description: "Qualitative palette “rembrandt” from the rtist collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#030504", "#F4DD9B", "#811D08", "#1E1507", "#252823"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "rtist"],
  background: "white",
  source: "rtist (via paletteer)"
} satisfies PaletteSource;

export default palette;
