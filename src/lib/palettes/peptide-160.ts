import type { PaletteSource } from "../types";

const palette = {
  name: "鲜红",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FFE5E5", "#FFD1D1", "#FFBDBD", "#FF9494", "#FF8080", "#FF6B6B", "#FF5757", "#FF4242", "#FF2E2E", "#FF1919", "#F50000", "#E00000", "#CC0000", "#B80000", "#A30000", "#8F0000", "#7A0000", "#660000", "#520000"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
