import type { PaletteSource } from "../types";

const palette = {
  name: "sPBIYl",
  description: "Sequential palette “sPBIYl” from Redmonder. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FCF9EA", "#ECE6CE", "#DBD4B2", "#CBC196", "#BBAF7A", "#AA9C5D", "#9A8941", "#897725", "#796409"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
