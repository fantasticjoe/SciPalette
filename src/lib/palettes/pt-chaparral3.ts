import type { PaletteSource } from "../types";

const palette = {
  name: "chaparral3",
  description: "Sequential palette “chaparral3” from calecopal. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#D3E3CA", "#BED6B3", "#92A587", "#4A5438", "#2F3525"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
