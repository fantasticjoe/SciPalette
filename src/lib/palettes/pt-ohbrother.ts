import type { PaletteSource } from "../types";

const palette = {
  name: "ohbrother",
  description: "Qualitative palette “ohbrother” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1A0F0A", "#3D291A", "#715639", "#747D6D", "#AD9D0B", "#94C4DF", "#E6DDA8"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
