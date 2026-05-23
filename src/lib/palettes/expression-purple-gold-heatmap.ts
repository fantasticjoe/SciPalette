import type { PaletteSource } from "../types";

const palette = {
  name: "Expression Purple Gold Heatmap",
  description: "Heatmap palette moving from deep purple through muted red to gold for expression matrices.",
  category: "heatmap",
  colors: ["#33264f", "#563c73", "#7e558f", "#a36f8d", "#c48a74", "#dda95c", "#efcd6f", "#f7e7a3"],
  recommendedFor: ["heatmap"],
  tags: ["heatmap", "expression", "purple-gold", "matrix"],
  background: "white",
  source: "Original SciPalette research expansion informed by heatmap and perceptual colormap guidance."
} satisfies PaletteSource;

export default palette;
