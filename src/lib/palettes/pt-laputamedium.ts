import type { PaletteSource } from "../types";

const palette = {
  name: "LaputaMedium",
  description: "Qualitative palette “LaputaMedium” from the ghibli collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#14191F", "#1D2645", "#403369", "#5C5992", "#AE93BE", "#B4DAE5", "#F0D77B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ghibli"],
  background: "white",
  source: "ghibli (via paletteer)"
} satisfies PaletteSource;

export default palette;
