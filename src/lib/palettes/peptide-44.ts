import type { PaletteSource } from "../types";

const palette = {
  name: "雾岛漫步",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#9BB7D4", "#C2D5E7", "#DCE7F0", "#E8E8E8", "#B5C1B4"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
