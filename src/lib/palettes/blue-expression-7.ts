import type { PaletteSource } from "../types";

const palette = {
  name: "Blue Expression 7",
  description: "Sequential blue palette for gene expression and continuous feature intensity on white backgrounds.",
  category: "sequential",
  colors: ["#f4f8fb", "#dbeaf2", "#bdd8e6", "#92bfd4", "#5f9ab8", "#2f7396", "#174f73"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "expression", "blue", "continuous"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
