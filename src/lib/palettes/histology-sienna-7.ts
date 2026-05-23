import type { PaletteSource } from "../types";

const palette = {
  name: "Histology Sienna 7",
  description: "Sequential sienna palette for histology-derived scores and warm stain intensity.",
  category: "sequential",
  colors: ["#fbf5ef", "#efdcc9", "#dfbd9b", "#ca976d", "#ad7049", "#854d33", "#5c3325"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "histology", "sienna", "intensity"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
