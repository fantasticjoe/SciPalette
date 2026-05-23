import type { PaletteSource } from "../types";

const palette = {
  name: "Microscopy Violet 8",
  description: "Sequential violet palette for microscopy intensity and image-derived scalar fields.",
  category: "sequential",
  colors: ["#f8f4fb", "#e8d8ef", "#d5b8df", "#bd92cc", "#a16bb2", "#804c91", "#5d346f", "#3e234d"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "microscopy", "violet", "intensity"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
