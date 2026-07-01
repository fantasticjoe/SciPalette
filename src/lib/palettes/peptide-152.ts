import type { PaletteSource } from "../types";

const palette = {
  name: "灰豆绿",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#EAECE6", "#DEE2DA", "#D2D8CE", "#C6CEC2", "#BAC4B6", "#AEBAAA", "#A2B09E", "#96A692", "#8A9C86", "#7E927A", "#72886E", "#667E62", "#5A7456", "#4E6A4A", "#42603E", "#365632", "#2A4C26", "#1E421A", "#12380E", "#062E02"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
