import type { PaletteSource } from "../types";

const palette = {
  name: "vangogh",
  description: "Qualitative palette “vangogh” from the rtist collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#010406", "#1E5880", "#FCCF49", "#F6E38E", "#A0C99C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "rtist"],
  background: "white",
  source: "rtist (via paletteer)"
} satisfies PaletteSource;

export default palette;
