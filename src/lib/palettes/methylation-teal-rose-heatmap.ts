import type { PaletteSource } from "../types";

const palette = {
  name: "Methylation Teal Rose Heatmap",
  description: "Heatmap palette for methylation and assay matrices with teal lows and rose highs.",
  category: "heatmap",
  colors: ["#1f4f5a", "#2f6f73", "#5f9290", "#9bb9b0", "#e8e1d6", "#ddb2ad", "#c47b82", "#93495a"],
  recommendedFor: ["heatmap"],
  tags: ["heatmap", "methylation", "teal-rose", "matrix"],
  background: "white",
  source: "Original SciPalette research expansion informed by heatmap and perceptual colormap guidance."
} satisfies PaletteSource;

export default palette;
