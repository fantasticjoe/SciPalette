import type { PaletteSource } from "../types";

const palette = {
  name: "冰原之诗",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#5E81AC", "#BF616A", "#A3BE8C", "#EBCB8B", "#B48EAD"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
