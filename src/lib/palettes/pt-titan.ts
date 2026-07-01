import type { PaletteSource } from "../types";

const palette = {
  name: "titan",
  description: "Sequential palette “titan” from futurevisions. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#0C0C0B", "#58271A", "#752021", "#DF5730", "#DC942F", "#FDEE92"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
