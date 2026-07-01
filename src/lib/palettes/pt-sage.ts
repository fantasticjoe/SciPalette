import type { PaletteSource } from "../types";

const palette = {
  name: "sage",
  description: "Qualitative palette “sage” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#607860", "#304830", "#C0D8F0", "#909078", "#181818"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
