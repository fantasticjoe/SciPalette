import type { PaletteSource } from "../types";

const palette = {
  name: "PinkYl",
  description: "Sequential palette “PinkYl” from rcartocolor. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FEF6B5", "#FFDD9A", "#FFC285", "#FFA679", "#FA8A76", "#F16D7A", "#E15383"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
