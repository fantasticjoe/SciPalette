import type { PaletteSource } from "../types";

const palette = {
  name: "Spatial Regions 11",
  description: "Categorical palette for spatial transcriptomics regions and tissue compartments.",
  category: "categorical",
  colors: ["#1f6f8a", "#c87f35", "#5f8f45", "#8a5f9a", "#a8a835", "#2f8f78", "#b85f5f", "#7a8a3f", "#7f5f35", "#5f6fa8", "#3f8f9a"],
  recommendedFor: ["scatter", "umap", "bar"],
  tags: ["categorical", "spatial", "tissue", "regions"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
