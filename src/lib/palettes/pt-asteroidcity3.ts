import type { PaletteSource } from "../types";

const palette = {
  name: "AsteroidCity3",
  description: "Qualitative palette “AsteroidCity3” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FBA72A", "#D3D4D8", "#CB7A5C", "#5785C1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
