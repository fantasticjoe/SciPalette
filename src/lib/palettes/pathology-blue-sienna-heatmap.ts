import type { PaletteSource } from "../types";

const palette = {
  name: "Pathology Blue Sienna Heatmap",
  description: "Heatmap palette for pathology features and stain-derived scores with balanced blue-to-sienna contrast.",
  category: "heatmap",
  colors: ["#243f5f", "#3f6382", "#6f91a5", "#b8c7c4", "#f2eadc", "#d7b184", "#b77a4f", "#7a422e"],
  recommendedFor: ["heatmap"],
  tags: ["heatmap", "pathology", "blue-sienna", "imaging"],
  background: "white",
  source: "Original SciPalette research expansion informed by heatmap and perceptual colormap guidance."
} satisfies PaletteSource;

export default palette;
