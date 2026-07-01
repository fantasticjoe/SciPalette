import type { PaletteSource } from "../types";

const palette = {
  name: "Thomas",
  description: "Qualitative palette “Thomas” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B24422", "#C44D76", "#4457A5", "#13315F", "#B1A1CC", "#59386C", "#447861", "#7CAF5C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
