import type { PaletteSource } from "../types";

const palette = {
  name: "CeriseLimon",
  description: "Qualitative palette “CeriseLimon” from the LaCroixColoR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EE4244", "#F8D961", "#B6D944", "#638E6E", "#3C5541", "#132157"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
