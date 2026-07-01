import type { PaletteSource } from "../types";

const palette = {
  name: "blues9",
  description: "Sequential palette “blues9” from grDevices. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F7FBFF", "#DEEBF7", "#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#08519C", "#08306B"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "grdevices"],
  background: "white",
  source: "grDevices (via paletteer)"
} satisfies PaletteSource;

export default palette;
