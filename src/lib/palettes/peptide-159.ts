import type { PaletteSource } from "../types";

const palette = {
  name: "沉香暖",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D9D0BF", "#FAECD5", "#FEE3C6", "#F0CEAB", "#D4AB88", "#F0EBDB", "#EAD7B8", "#EEDAAF", "#FFE2CF", "#E0C7AE", "#CCBFAE", "#C4967B", "#E5D8C9", "#E2BBA6", "#A89181", "#E5D7D1", "#CEB3AA", "#A5796B", "#C193A2"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
