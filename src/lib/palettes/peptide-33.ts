import type { PaletteSource } from "../types";

const palette = {
  name: "荷塘月色",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D8A7B1", "#B6E2D3", "#FAE8E0", "#8FD9A8", "#4A6C6F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
