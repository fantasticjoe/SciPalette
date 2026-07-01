import type { PaletteSource } from "../types";

const palette = {
  name: "蜜桃乌龙",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FFDAB9", "#F08080", "#CD5C5C", "#8B4513", "#F5F5DC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
