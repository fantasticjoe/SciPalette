import type { PaletteSource } from "../types";

const palette = {
  name: "碎玉清荷",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B7D3C3", "#DAE9E4", "#F7F9F7", "#E9CFD0", "#CBA5A8"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
