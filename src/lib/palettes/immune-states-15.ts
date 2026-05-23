import type { PaletteSource } from "../types";

const palette = {
  name: "Immune States 15",
  description: "Medium-large categorical palette for immune cell state labels and faceted single-cell figures.",
  category: "categorical",
  colors: ["#244f7a", "#d45f4a", "#3f8f6a", "#7a4fb0", "#c8a02f", "#2f9a9a", "#c24f7a", "#8a8f2f", "#8f5f32", "#4f63b0", "#5f9a4f", "#b86a3f", "#3f7f9a", "#a04f92", "#d18a2f"],
  recommendedFor: ["umap", "scatter"],
  tags: ["categorical", "single-cell", "immune", "states"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
