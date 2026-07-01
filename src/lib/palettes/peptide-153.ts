import type { PaletteSource } from "../types";

const palette = {
  name: "暖灰褐",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#EBEAE6", "#E0DED9", "#D5D2CC", "#CAC6BF", "#BFBAB2", "#B4AEA5", "#A9A298", "#9E968B", "#938A7E", "#887E71", "#7D7264", "#726657", "#675A4A", "#5C4E3D", "#514230", "#463623", "#3B2A16", "#301E09", "#251200", "#1A0600"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
