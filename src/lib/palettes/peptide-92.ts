import type { PaletteSource } from "../types";

const palette = {
  name: "Table Row Pastels",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F2F2F2", "#E6F7FF", "#F0F9EB", "#FFF7E6", "#FFF0F6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
