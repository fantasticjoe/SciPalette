import type { PaletteSource } from "../types";

const palette = {
  name: "desert",
  description: "Sequential palette “desert” from calecopal. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F6EECF", "#ECD6AB", "#B09175", "#632D1F", "#291611"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
