import type { PaletteSource } from "../types";

const palette = {
  name: "青空谣",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D5DEE6", "#B3C3D5", "#D4D2E9", "#D5D3DE", "#AECBE0", "#DBE0EB", "#C0C4C9", "#C4D4DE", "#0ACCCA", "#ACC5D1", "#7AA490", "#8DB1E1", "#7FA6C4", "#7E88AF", "#7EB2DA", "#92B7C8", "#306692", "#8BA3C8", "#7396C6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
