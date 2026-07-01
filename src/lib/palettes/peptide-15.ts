import type { PaletteSource } from "../types";

const palette = {
  name: "窗纱香灰",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B6A9C8", "#A09BC3", "#9DBFC3", "#D8E6EA"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
