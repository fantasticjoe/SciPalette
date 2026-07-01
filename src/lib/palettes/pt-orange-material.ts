import type { PaletteSource } from "../types";

const palette = {
  name: "orange material",
  description: "Sequential palette “orange material” from ggsci. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FFF3E0", "#FFE0B2", "#FFCC80", "#FFB74D", "#FFA726", "#FF9800", "#FB8C00", "#F57C00", "#EF6C00", "#E65100"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "ggsci"],
  background: "white",
  source: "ggsci (via paletteer)"
} satisfies PaletteSource;

export default palette;
