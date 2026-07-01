import type { PaletteSource } from "../types";

const palette = {
  name: "冬日可爱",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#ACE0CF", "#8EBCDB", "#A79FCE", "#FE9F69", "#FEC080"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
