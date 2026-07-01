import type { PaletteSource } from "../types";

const palette = {
  name: "胭脂醉",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EAD2CC", "#F0E5E8", "#FBCCEE", "#F6BFCA", "#DDB1B1", "#E3B8D4", "#F7BDCB", "#E5C7CF", "#D07F7A", "#CAA7B7", "#DD91A6", "#ECC6BE", "#F9D2E4", "#E1929D", "#F1E1E5", "#CA93AB", "#EEDAE9", "#EFBBD2", "#CB7E99", "#93445E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
