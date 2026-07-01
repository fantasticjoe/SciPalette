import type { PaletteSource } from "../types";

const palette = {
  name: "柔和色调",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#7EB7DC", "#8E97B6", "#C5DBF0", "#FCCFC5", "#A7BADC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
