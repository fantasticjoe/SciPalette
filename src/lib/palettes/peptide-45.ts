import type { PaletteSource } from "../types";

const palette = {
  name: "橘子汽水",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FBC9A7", "#FDDDC3", "#FEF3E8", "#BBDED6", "#8AC6D1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
