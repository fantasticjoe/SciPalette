import type { PaletteSource } from "../types";

const palette = {
  name: "Egypt",
  description: "Qualitative palette “Egypt” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DD5129", "#0F7BA2", "#43B284", "#FAB255"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
