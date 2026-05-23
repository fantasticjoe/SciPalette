import type { PaletteSource } from "../types";

const palette = {
  name: "Flow Cytometry Bluegreen 8",
  description: "Sequential blue-green palette for cytometry expression gradients and bivariate summaries.",
  category: "sequential",
  colors: ["#f1f8f5", "#d5ebe1", "#afd9c9", "#7fc0a8", "#50a083", "#327f68", "#1f5f4f", "#153f36"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "cytometry", "bluegreen", "expression"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
