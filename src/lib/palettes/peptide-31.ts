import type { PaletteSource } from "../types";

const palette = {
  name: "敦煌飞天",
  description: "Community-curated palette from lab.peptide.ink (ColorLab). Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D48E7E", "#8AA29E", "#D7B98E", "#5D5C61", "#A44A4A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "peptide", "curated"],
  background: "white",
  source: "lab.peptide.ink"
} satisfies PaletteSource;

export default palette;
