import type { PaletteSource } from "../types";

const palette = {
  name: "Bright",
  description: "Qualitative palette “Bright” from the PrettyCols collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#462255", "#FF8811", "#9DD9D2", "#046E8F", "#D44D5C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
