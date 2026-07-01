import type { PaletteSource } from "../types";

const palette = {
  name: "Mushroom",
  description: "Sequential palette “Mushroom” from PNWColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#4F412B", "#865A3C", "#BA783E", "#E69C4C", "#FBCC74", "#FFFBDA"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "pnwcolors"],
  background: "white",
  source: "PNWColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
