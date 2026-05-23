import type { PaletteSource } from "../types";

const palette = {
  name: "Green Module Score 7",
  description: "Sequential green palette for module scores and enrichment values without neon saturation.",
  category: "sequential",
  colors: ["#f5f8f2", "#dfead7", "#c4d9b8", "#9fc492", "#72a96b", "#4f874c", "#2f6534"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "module-score", "green", "continuous"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
