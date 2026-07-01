import type { PaletteSource } from "../types";

const palette = {
  name: "青花瓷韵",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#1C3E6E", "#4A7099", "#8DA7BE", "#E4EBF1", "#6B7C85"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
