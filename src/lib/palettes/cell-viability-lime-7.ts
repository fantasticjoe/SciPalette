import type { PaletteSource } from "../types";

const palette = {
  name: "Cell Viability Lime 7",
  description: "Sequential yellow-green palette for viability, enrichment, and positive response scores.",
  category: "sequential",
  colors: ["#f7f8ed", "#e6ebc8", "#cfd99b", "#b2c46d", "#8fab47", "#6f8c32", "#4f6825"],
  recommendedFor: ["heatmap", "bar", "scatter"],
  tags: ["sequential", "viability", "lime", "response"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
