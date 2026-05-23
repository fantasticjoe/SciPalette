import type { PaletteSource } from "../types";

const palette = {
  name: "Topography Moss 8",
  description: "Sequential moss palette for spatial gradients, topography-like scores, and ordered surfaces.",
  category: "sequential",
  colors: ["#f5f7ef", "#e0e8cc", "#c4d4a2", "#9fb976", "#7a9d57", "#5c7d43", "#415d32", "#2d4025"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "spatial", "moss", "continuous"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
