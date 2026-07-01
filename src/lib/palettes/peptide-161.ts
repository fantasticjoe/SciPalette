import type { PaletteSource } from "../types";

const palette = {
  name: "碧岚语",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#ABC4BA", "#C9DFD6", "#D7EDE4", "#C6ECCE", "#D1ECD9", "#BBDAB8", "#D2DEC7", "#AED9C1", "#7DA490", "#B6CCB5", "#94D4BC", "#B0BE97", "#C8EAC0", "#78B8A3", "#ACCEC4", "#87CE9D", "#8CBDB6", "#527865", "#AED09C", "#719F6F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
