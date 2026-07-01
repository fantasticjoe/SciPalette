import type { PaletteSource } from "../types";

const palette = {
  name: "品红色",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FCE4EC", "#F8BBD0", "#F48FB1", "#F06292", "#EC407A", "#E91E63", "#C2185B", "#AD1457", "#880E4F", "#790D46", "#6A0B3D", "#5B0A34", "#4C082B", "#3D0722", "#2E0519", "#1F0310", "#100108", "#000000"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
