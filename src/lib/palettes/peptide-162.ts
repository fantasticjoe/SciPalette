import type { PaletteSource } from "../types";

const palette = {
  name: "红橙色",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FFEBE0", "#FFEACC", "#FFDFA3", "#FFD485", "#FFC966", "#FFBE47", "#FFB329", "#FFA80A", "#F59D00", "#E09200", "#CC8700", "#B87C00", "#A37100", "#8F6600", "#7A5B00", "#665000", "#524500", "#3D3A00", "#292F00", "#142400"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
