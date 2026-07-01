import type { PaletteSource } from "../types";

const palette = {
  name: "davinci",
  description: "Qualitative palette “davinci” from the rtist collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#000206", "#EFC775", "#2B2D18", "#5C7346", "#5A3A22"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "rtist"],
  background: "white",
  source: "rtist (via paletteer)"
} satisfies PaletteSource;

export default palette;
