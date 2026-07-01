import type { PaletteSource } from "../types";

const palette = {
  name: "green material",
  description: "Sequential palette “green material” from ggsci. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#E8F5E9", "#C8E6C9", "#A5D6A7", "#81C784", "#66BB6A", "#4CAF50", "#43A047", "#388E3C", "#2E7D32", "#1B5E20"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "ggsci"],
  background: "white",
  source: "ggsci (via paletteer)"
} satisfies PaletteSource;

export default palette;
