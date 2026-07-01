import type { PaletteSource } from "../types";

const palette = {
  name: "珊瑚礁",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FF6F61", "#FFB74D", "#4FC3F7", "#4DB6AC", "#BA68C8"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
