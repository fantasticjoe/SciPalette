import type { PaletteSource } from "../types";

const palette = {
  name: "Soft Plasma 8",
  description: "Soft purple-to-gold sequential palette for continuous data needing more hue variation than single-hue ramps.",
  category: "sequential",
  colors: ["#f7f3f5", "#e5d7e6", "#c9b5d2", "#a88fba", "#8a6a9a", "#9a755f", "#bf9845", "#e2c75f"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "purple", "gold"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
