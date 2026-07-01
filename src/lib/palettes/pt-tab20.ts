import type { PaletteSource } from "../types";

const palette = {
  name: "tab20",
  description: "Qualitative palette “tab20” from the matplotlib/seaborn builtin collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1F77B4", "#AEC7E8", "#FF7F0E", "#FFBB78", "#2CA02C", "#98DF8A", "#D62728", "#FF9896", "#9467BD", "#C5B0D5"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "matplotlib-seaborn-builtin"],
  background: "white",
  source: "matplotlib/seaborn builtin (via paletteer)"
} satisfies PaletteSource;

export default palette;
