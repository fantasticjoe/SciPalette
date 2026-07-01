import type { PaletteSource } from "../types";

const palette = {
  name: "薰衣草田",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A29BB7", "#C6C1D6", "#E3E0E9", "#F2E8E8", "#D9B8B5"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
