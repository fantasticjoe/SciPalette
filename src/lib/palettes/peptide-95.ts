import type { PaletteSource } from "../types";

const palette = {
  name: "Dusty Diagram",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#DDBEA9", "#FFE8D6", "#B7B7A4", "#A5A58D", "#6B705C"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
