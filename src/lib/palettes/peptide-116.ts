import type { PaletteSource } from "../types";

const palette = {
  name: "温暖邻近色",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FF9B54", "#FF7F51", "#F45C4E", "#E4444E", "#D03455"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
