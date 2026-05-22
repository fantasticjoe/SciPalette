import type { Palette } from "../types";

const palette = {
  id: "cell-atlas-12",
  name: "Cell Atlas 12",
  description: "Vibrant palette designed for single-cell clustering and cell type annotation. High contrast for distinguishing many clusters.",
  category: "categorical",
  colors: ["#1F77B4", "#FF7F0E", "#2CA02C", "#D62728", "#9467BD", "#8C564B", "#E377C2", "#7F7F7F", "#BCBD22", "#17BECF", "#AEC7E8", "#FFBB78"],
  recommendedFor: ["umap", "scatter"],
  tags: ["single-cell", "clustering", "cell-types", "scRNA-seq"],
  colorblindSafe: false,
  background: "white",
  source: "Optimized for single-cell analysis"
} satisfies Palette;

export default palette;
