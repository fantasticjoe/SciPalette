import type { PaletteSource } from "../types";

const palette = {
  name: "阳春白雪",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A8D8B9", "#F3E5AB", "#FFD1D1", "#E0F2F1", "#9EA1D4"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
