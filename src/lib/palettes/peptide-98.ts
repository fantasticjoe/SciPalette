import type { PaletteSource } from "../types";

const palette = {
  name: "马卡龙",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F9DBBD", "#FFA5AB", "#DAA5FF", "#87CEFA", "#98FB98"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
