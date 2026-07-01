import type { PaletteSource } from "../types";

const palette = {
  name: "半岛晴空",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#7FB0D4", "#947FAD", "#DDBFDF", "#FFCB8F", "#91D5C9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
