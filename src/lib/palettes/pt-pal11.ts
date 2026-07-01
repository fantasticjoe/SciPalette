import type { PaletteSource } from "../types";

const palette = {
  name: "pal11",
  description: "Sequential palette “pal11” from jcolors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#202547", "#323649", "#41474B", "#4E5A4C", "#5C6C4C", "#68804C", "#75944B", "#81A949", "#8EBE45", "#9AD340", "#A6E939", "#B2FF2E"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
