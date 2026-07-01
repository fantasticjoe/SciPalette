import type { PaletteSource } from "../types";

const palette = {
  name: "Paintjet",
  description: "Qualitative palette “Paintjet” from the palettesForR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#18140C", "#F4F0E8", "#C44448", "#30845C", "#F0E848", "#343074", "#BC306C", "#2874C4"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "palettesforr"],
  background: "white",
  source: "palettesForR (via paletteer)"
} satisfies PaletteSource;

export default palette;
