import type { PaletteSource } from "../types";

const palette = {
  name: "Tissue Panel 14",
  description: "Categorical palette for tissue panels, organ systems, and large group legends.",
  category: "categorical",
  colors: ["#365f7f", "#b87535", "#5f7f4f", "#6f5f8f", "#a8903f", "#4f7f78", "#a85f70", "#7f7f45", "#7f6548", "#5f6f98", "#5f8a6a", "#a06a50", "#6f7f90", "#8f6f85"],
  recommendedFor: ["bar", "scatter", "umap"],
  tags: ["categorical", "tissue", "panel", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by qualitative palette design guidance."
} satisfies PaletteSource;

export default palette;
