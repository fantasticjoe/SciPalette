import type { PaletteSource } from "../types";

const palette = {
  name: "fivethirtyeight",
  description: "Qualitative palette “fivethirtyeight” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3C3C3C", "#D2D2D2", "#F0F0F0", "#FF2700", "#008FD5", "#77AB43"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
