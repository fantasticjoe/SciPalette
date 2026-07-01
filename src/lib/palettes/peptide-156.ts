import type { PaletteSource } from "../types";

const palette = {
  name: "灰紫",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#EAE9ED", "#DEDCE3", "#D2CFDA", "#C6C2D1", "#BAB5C8", "#AEA8BF", "#A29BB6", "#968EAD", "#8A81A4", "#7E749B", "#726792", "#665A89", "#5A4D80", "#4E4077", "#42336E", "#362665", "#2A195C", "#1E0C53", "#12004A", "#060041"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
