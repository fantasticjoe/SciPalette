import type { PaletteSource } from "../types";

const palette = {
  name: "商务科技",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#05668D", "#028090", "#00A896", "#02C39A", "#F0F3BD"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
