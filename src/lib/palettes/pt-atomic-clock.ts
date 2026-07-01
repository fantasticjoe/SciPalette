import type { PaletteSource } from "../types";

const palette = {
  name: "atomic clock",
  description: "Qualitative palette “atomic clock” from the futurevisions collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#09283C", "#3CC8C0", "#F2EBBB", "#F18B00", "#CB1724"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
