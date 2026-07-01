import type { PaletteSource } from "../types";

const palette = {
  name: "RedOr",
  description: "Sequential palette “RedOr” from rcartocolor. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F6D2A9", "#F5B78E", "#F19C7C", "#EA8171", "#DD686C", "#CA5268", "#B13F64"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
