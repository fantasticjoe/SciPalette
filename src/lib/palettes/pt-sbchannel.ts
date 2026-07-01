import type { PaletteSource } from "../types";

const palette = {
  name: "sbchannel",
  description: "Sequential palette “sbchannel” from calecopal. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#A1CAF6", "#6592D6", "#4C6FA1", "#375377", "#1E2F46"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
