import type { PaletteSource } from "../types";

const palette = {
  name: "Cell Lineage 16",
  description: "Large categorical palette with moderated saturation for single-cell lineage and cluster annotation.",
  category: "categorical",
  colors: ["#33658a", "#d17a45", "#5b8c5a", "#7b5e8e", "#c4a043", "#3f8f86", "#b55f7a", "#7e8741", "#8b6b4c", "#5d72a6", "#4f8a78", "#a96a4f", "#6a7d9a", "#9a6f8f", "#b08a3d", "#4f7f58"],
  recommendedFor: ["umap", "scatter"],
  tags: ["categorical", "single-cell", "lineage", "clusters"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
