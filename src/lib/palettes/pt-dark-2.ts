import type { PaletteSource } from "../types";

const palette = {
  name: "dark",
  description: "Qualitative palette “dark” from the matplotlib/seaborn builtin collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#001C7F", "#B1400D", "#12711C", "#8C0800", "#591E71", "#592F0D", "#A23582", "#3C3C3C", "#B8850A", "#006374"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "matplotlib-seaborn-builtin"],
  background: "white",
  source: "matplotlib/seaborn builtin (via paletteer)"
} satisfies PaletteSource;

export default palette;
