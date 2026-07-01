import type { PaletteSource } from "../types";

const palette = {
  name: "Chevalier1",
  description: "Qualitative palette “Chevalier1” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#446455", "#FDD262", "#D3DDDC", "#C7B19C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
