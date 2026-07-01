import type { PaletteSource } from "../types";

const palette = {
  name: "Flat UI Muted",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1ABC9C", "#3498DB", "#9B59B6", "#E67E22", "#95A5A6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
