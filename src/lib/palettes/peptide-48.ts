import type { PaletteSource } from "../types";

const palette = {
  name: "初雪落樱",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F3D1D1", "#F9E4E4", "#FFFFFF", "#D6E5F3", "#B9D1EA"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
