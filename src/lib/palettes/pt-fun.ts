import type { PaletteSource } from "../types";

const palette = {
  name: "Fun",
  description: "Qualitative palette “Fun” from the PrettyCols collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#134074", "#BFAB25", "#4EA699", "#EFB0A1", "#DF2935"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
