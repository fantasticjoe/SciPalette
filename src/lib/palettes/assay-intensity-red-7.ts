import type { PaletteSource } from "../types";

const palette = {
  name: "Assay Intensity Red 7",
  description: "Sequential red palette for assay intensity and positive signal maps without rainbow artifacts.",
  category: "sequential",
  colors: ["#fbf4f1", "#efd7cf", "#dfb2a5", "#cc8978", "#b65f50", "#934139", "#6b2c2a"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "assay", "red", "intensity"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
