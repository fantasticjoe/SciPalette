import type { PaletteSource } from "../types";

const palette = {
  name: "Set1 Contrast",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E41A1C", "#377EB8", "#4DAF4A", "#984EA3", "#FF7F00"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
