import type { PaletteSource } from "../types";

const palette = {
  name: "nemo",
  description: "Qualitative palette “nemo” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FBCF35", "#ED4C1C", "#9C7E70", "#5AC2F1", "#11776C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
