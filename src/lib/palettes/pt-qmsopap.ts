import type { PaletteSource } from "../types";

const palette = {
  name: "qMSOPap",
  description: "Qualitative palette “qMSOPap” from the Redmonder collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FEFAC9", "#444D26", "#A5B592", "#F3A447", "#E7BC29", "#D092A7", "#9C85C0", "#809EC2"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
