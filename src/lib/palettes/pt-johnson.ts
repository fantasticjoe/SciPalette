import type { PaletteSource } from "../types";

const palette = {
  name: "Johnson",
  description: "Qualitative palette “Johnson” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A00E00", "#D04E00", "#F6C200", "#0086A8", "#132B69"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
