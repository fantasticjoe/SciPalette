import type { PaletteSource } from "../types";

const palette = {
  name: "Protein Abundance Heatmap",
  description: "Heatmap palette for abundance matrices that preserves low-value detail and high-value emphasis.",
  category: "heatmap",
  colors: ["#f7f5ef", "#e2dfc8", "#c7c39b", "#a7a66f", "#858a4a", "#66703a", "#485834", "#2f3f2f"],
  recommendedFor: ["heatmap"],
  tags: ["heatmap", "protein", "abundance", "matrix"],
  background: "white",
  source: "Original SciPalette research expansion informed by heatmap and perceptual colormap guidance."
} satisfies PaletteSource;

export default palette;
