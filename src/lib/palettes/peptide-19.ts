import type { PaletteSource } from "../types";

const palette = {
  name: "晓梦鸢尾",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B2C0D2", "#CCCBD3", "#F3F1EB", "#3D547F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
