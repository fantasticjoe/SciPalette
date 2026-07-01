import type { PaletteSource } from "../types";

const palette = {
  name: "NatureReviews Soft",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E3DAC9", "#A0B0C0", "#D88C9A", "#8FBC94", "#6D8A96"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
