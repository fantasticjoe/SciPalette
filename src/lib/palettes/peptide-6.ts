import type { PaletteSource } from "../types";

const palette = {
  name: "浮光樱落",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F7BEBF", "#FEDBD0", "#E9F2F6", "#D4E5F6", "#B0C3E8"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
