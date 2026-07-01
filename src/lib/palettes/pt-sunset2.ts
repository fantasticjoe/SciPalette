import type { PaletteSource } from "../types";

const palette = {
  name: "Sunset2",
  description: "Sequential palette “Sunset2” from PNWColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#1D457F", "#61599D", "#C36377", "#EB7F54", "#F2AF4A"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "pnwcolors"],
  background: "white",
  source: "PNWColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
