import type { PaletteSource } from "../types";

const palette = {
  name: "晚风告白",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A1B6D0", "#CAD7E6", "#EEF2F5", "#F7D8BA", "#EAB493"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
