import type { PaletteSource } from "../types";

const palette = {
  name: "青瓷烟雨",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DAE6EF", "#C5C1D8", "#8BCFDC", "#67A6C2", "#415882"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
