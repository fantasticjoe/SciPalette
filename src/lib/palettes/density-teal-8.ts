import type { PaletteSource } from "../types";

const palette = {
  name: "Density Teal 8",
  description: "Sequential teal palette for density, probability, and local abundance previews.",
  category: "sequential",
  colors: ["#f4faf8", "#d9eee9", "#b9dfd7", "#8fc9c0", "#63aea8", "#3f8f8a", "#23706f", "#155456"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "density", "teal", "continuous"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
