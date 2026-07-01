import type { PaletteSource } from "../types";

const palette = {
  name: "Teal",
  description: "Sequential palette “Teal” from rcartocolor. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#D1EEEA", "#A8DBD9", "#85C4C9", "#68ABB8", "#4F90A6", "#3B738F", "#2A5674"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
