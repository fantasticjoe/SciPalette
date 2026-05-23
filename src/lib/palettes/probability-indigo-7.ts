import type { PaletteSource } from "../types";

const palette = {
  name: "Probability Indigo 7",
  description: "Sequential indigo palette for probabilities, confidence scores, and model outputs.",
  category: "sequential",
  colors: ["#f5f4fb", "#dedcf0", "#c2bee0", "#9e98c9", "#7770ac", "#554e8c", "#39335f"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "probability", "indigo", "model"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
