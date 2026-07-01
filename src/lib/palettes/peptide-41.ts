import type { PaletteSource } from "../types";

const palette = {
  name: "碧海潮生",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#88B0B9", "#BFD8D2", "#DFE2DB", "#B1A18F", "#5B7074"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
