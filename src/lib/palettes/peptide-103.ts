import type { PaletteSource } from "../types";

const palette = {
  name: "深秋落叶",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#9A4927", "#B96A3A", "#E39D4E", "#F4CE74", "#6E5C4A"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
