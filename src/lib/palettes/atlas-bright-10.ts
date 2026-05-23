import type { PaletteSource } from "../types";

const palette = {
  name: "Atlas Bright 10",
  description: "High-separation categorical palette for atlas-scale labels on white scientific figures.",
  category: "categorical",
  colors: ["#2b6f9e", "#d1663f", "#4f8a4b", "#8e5ea2", "#c9942f", "#2f9a8f", "#c75b83", "#6f7f2f", "#8a6a43", "#5b6fb3"],
  recommendedFor: ["umap", "scatter", "bar"],
  tags: ["categorical", "atlas", "bright", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
