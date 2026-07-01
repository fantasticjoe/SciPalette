import type { PaletteSource } from "../types";

const palette = {
  name: "水彩质感",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A9C1C9", "#ADBD9A", "#D5D79C", "#F0E2A3", "#E7C485"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
