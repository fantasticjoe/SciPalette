import type { PaletteSource } from "../types";

const palette = {
  name: "落日熔金",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FEF0D9", "#FDCC8A", "#FC8D59", "#E34A33", "#B30000"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
