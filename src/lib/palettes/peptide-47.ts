import type { PaletteSource } from "../types";

const palette = {
  name: "云端信笔",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#92B4B1", "#B9D1D0", "#E4EBEB", "#F9F7F0", "#D9C5B2"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
