import type { PaletteSource } from "../types";

const palette = {
  name: "degas",
  description: "Qualitative palette “degas” from the rtist collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#7A654E", "#E9CBB7", "#AC713B", "#78818D", "#352E23"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "rtist"],
  background: "white",
  source: "rtist (via paletteer)"
} satisfies PaletteSource;

export default palette;
