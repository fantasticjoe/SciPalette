import type { PaletteSource } from "../types";

const palette = {
  name: "烟粉",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F5EBE9", "#EEDFD9", "#E7D3CA", "#E0C7BB", "#D9BBAF", "#D1ADA3", "#C9A197", "#C2958B", "#B9897F", "#B27D73", "#A97167", "#A2655B", "#9A594F", "#934D43", "#8B4137", "#84352B", "#7C291F", "#751D13"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
