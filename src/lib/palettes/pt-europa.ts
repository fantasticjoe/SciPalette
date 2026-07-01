import type { PaletteSource } from "../types";

const palette = {
  name: "europa",
  description: "Sequential palette “europa” from futurevisions. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#030F1E", "#253473", "#4982B6", "#8CCCE4", "#DFEBF1"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
