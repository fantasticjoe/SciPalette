import type { PaletteSource } from "../types";

const palette = {
  name: "vibrant",
  description: "Qualitative palette “vibrant” from the khroma collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EE7733", "#0077BB", "#33BBEE", "#EE3377", "#CC3311", "#009988", "#BBBBBB"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "khroma"],
  background: "white",
  source: "khroma (via paletteer)"
} satisfies PaletteSource;

export default palette;
