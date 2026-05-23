import type { PaletteSource } from "../types";

const palette = {
  name: "Uncertainty Gray Blue 7",
  description: "Sequential gray-blue palette for uncertainty, error, and confidence interval density maps.",
  category: "sequential",
  colors: ["#f5f6f7", "#dde3e6", "#c1ccd3", "#9faebb", "#7b8fa0", "#5c7085", "#405166"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "uncertainty", "gray-blue", "model"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
