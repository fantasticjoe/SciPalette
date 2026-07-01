import type { PaletteSource } from "../types";

const palette = {
  name: "bright",
  description: "Qualitative palette “bright” from the matplotlib/seaborn builtin collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#023EFF", "#FF7C00", "#1AC938", "#E8000B", "#8B2BE2", "#9F4800", "#F14CC1", "#A3A3A3", "#FFC400", "#00D7FF"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "matplotlib-seaborn-builtin"],
  background: "white",
  source: "matplotlib/seaborn builtin (via paletteer)"
} satisfies PaletteSource;

export default palette;
