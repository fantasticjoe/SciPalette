import type { PaletteSource } from "../types";

const palette = {
  name: "BrwnYl",
  description: "Sequential palette “BrwnYl” from rcartocolor. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#EDE5CF", "#E0C2A2", "#D39C83", "#C1766F", "#A65461", "#813753", "#541F3F"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
