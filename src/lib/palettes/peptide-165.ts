import type { PaletteSource } from "../types";

const palette = {
  name: "黄绿色",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F4FFE0", "#E9FFC2", "#DEFFA3", "#D4FF85", "#C9FF66", "#BFFF47", "#B4FF29", "#A9FF0A", "#9EF000", "#8ED600", "#7EBD00", "#6EA300", "#5E8A00", "#4E7000", "#3E5700", "#2E3D00", "#1E2400", "#0F0A00", "#000000"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
