import type { PaletteSource } from "../types";

const palette = {
  name: "Pastel Soft",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FBB4AE", "#B3CDE3", "#CCEBC5", "#DECBE4", "#FED9A6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
