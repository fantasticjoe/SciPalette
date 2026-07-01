import type { PaletteSource } from "../types";

const palette = {
  name: "草绿色",
  description: "Community-curated single-hue ramp from lab.peptide.ink (ColorLab). Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#E8F5E9", "#D1EAD3", "#BAE0BD", "#A2D5A8", "#8BCA92", "#73BF7C", "#5CB466", "#45AA50", "#2FA03B", "#189525", "#158521", "#12751D", "#0F6419", "#0C5415", "#094411", "#06340D", "#042308", "#021204", "#000200", "#000000"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
