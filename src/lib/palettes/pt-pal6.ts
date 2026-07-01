import type { PaletteSource } from "../types";

const palette = {
  name: "pal6",
  description: "Qualitative palette “pal6” from the jcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#558AA6", "#B1740F", "#D5006A", "#08585A", "#FFFD98", "#9449D2", "#BBBE64", "#D7263D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
