import type { PaletteSource } from "../types";

const palette = {
  name: "紫晶洞",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#3C1642", "#582F53", "#734764", "#9F6976", "#C48A86"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
