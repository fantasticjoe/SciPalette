import type { PaletteSource } from "../types";

const palette = {
  name: "Spatial Density Heatmap",
  description: "Heatmap palette for spatial density fields with low visual clutter and a strong high-value endpoint.",
  category: "heatmap",
  colors: ["#f4f7f1", "#d7e7d2", "#afd2b4", "#7fb99c", "#529a8b", "#397579", "#2f4f67", "#2b2f4f"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["heatmap", "spatial", "density", "continuous"],
  background: "white",
  source: "Original SciPalette research expansion informed by heatmap and perceptual colormap guidance."
} satisfies PaletteSource;

export default palette;
