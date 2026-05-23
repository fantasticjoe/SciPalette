import type { PaletteSource } from "../types";

const palette = {
  name: "Neuro Clusters 10",
  description: "Categorical palette for neural clusters, brain regions, and embedding overlays.",
  category: "categorical",
  colors: ["#3f4f9a", "#d07a32", "#2f8a78", "#8a4f9f", "#b8a830", "#2f8fb0", "#b84f90", "#6f8f35", "#9a5f2f", "#5f6fc0"],
  recommendedFor: ["umap", "scatter", "bar"],
  tags: ["categorical", "neuroscience", "clusters", "atlas"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
