import type { PaletteSource } from "../types";

const palette = {
  name: "月光浅岛",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#90A4C5", "#93B0DA", "#BFD8EC", "#DBDCEE", "#F5C8B5"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
