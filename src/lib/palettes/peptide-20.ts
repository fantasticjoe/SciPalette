import type { PaletteSource } from "../types";

const palette = {
  name: "深海鎏金",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#0C2948", "#325675", "#CDA04F", "#7793AB"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
