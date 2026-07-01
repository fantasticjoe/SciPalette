import type { PaletteSource } from "../types";

const palette = {
  name: "Greek",
  description: "Qualitative palette “Greek” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3C0D03", "#8D1C06", "#E67424", "#ED9B49", "#F5C34D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
