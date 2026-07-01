import type { PaletteSource } from "../types";

const palette = {
  name: "Homer2",
  description: "Qualitative palette “Homer2” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#BF3626", "#E9851D", "#F9C53B", "#AEAC4C", "#788F33", "#165D43"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
