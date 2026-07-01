import type { PaletteSource } from "../types";

const palette = {
  name: "ag Sunset",
  description: "Sequential palette “ag Sunset” from rcartocolor. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#4B2991", "#872CA2", "#C0369D", "#EA4F88", "#FA7876", "#F6A97A", "#EDD9A3"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
