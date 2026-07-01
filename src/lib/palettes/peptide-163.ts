import type { PaletteSource } from "../types";

const palette = {
  name: "亮橙色",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FFF4E0", "#FFEACC", "#FFDFB8", "#FFD4A3", "#FFC98F", "#FFBE7A", "#FFB366", "#FFA852", "#FF9E3D", "#FF9329", "#FF8814", "#F57C00", "#E07000", "#CC6400", "#B85800", "#A34C00", "#8F4000", "#7A3400", "#662800", "#521C00"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
