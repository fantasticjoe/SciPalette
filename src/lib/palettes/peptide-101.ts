import type { PaletteSource } from "../types";

const palette = {
  name: "春日田园",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D4E09B", "#F6F4D2", "#CBDFBD", "#AFC5AD", "#9A9E86"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
