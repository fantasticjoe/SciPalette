import type { PaletteSource } from "../types";

const palette = {
  name: "桃源仙境",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E8D0C4", "#C8D5B9", "#9CB4CC", "#D6B0B1", "#8B7E74"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
