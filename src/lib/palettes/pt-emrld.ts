import type { PaletteSource } from "../types";

const palette = {
  name: "Emrld",
  description: "Sequential palette “Emrld” from rcartocolor. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#D3F2A3", "#97E196", "#6CC08B", "#4C9B82", "#217A79", "#105965", "#074050"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
