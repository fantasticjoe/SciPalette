import type { PaletteSource } from "../types";

const palette = {
  name: "pso",
  description: "Sequential palette “pso” from futurevisions. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#272727", "#383955", "#61619B", "#BDC6DC", "#FBFAFA"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
