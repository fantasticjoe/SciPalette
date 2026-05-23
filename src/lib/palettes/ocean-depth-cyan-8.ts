import type { PaletteSource } from "../types";

const palette = {
  name: "Ocean Depth Cyan 8",
  description: "Sequential cyan-blue palette for depth, distance, and monotone environmental gradients.",
  category: "sequential",
  colors: ["#f2fafb", "#d7eef2", "#b3dce5", "#88c3d4", "#5aa5bd", "#3482a0", "#1f5f7e", "#143f5c"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "environment", "cyan", "continuous"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
