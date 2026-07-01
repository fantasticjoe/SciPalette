import type { PaletteSource } from "../types";

const palette = {
  name: "prism dark",
  description: "Qualitative palette “prism dark” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A48AD3", "#1CC5FE", "#6FC7CF", "#FBA27D", "#FB7D80", "#2C1453", "#114CE8", "#0E6F7C", "#FB4F06", "#FB0005"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
