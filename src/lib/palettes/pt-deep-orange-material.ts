import type { PaletteSource } from "../types";

const palette = {
  name: "deep orange material",
  description: "Sequential palette “deep orange material” from ggsci. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FBE9E7", "#FFCCBC", "#FFAB91", "#FF8A65", "#FF7043", "#FF5722", "#F4511E", "#E64A19", "#D84315", "#BF360C"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "ggsci"],
  background: "white",
  source: "ggsci (via paletteer)"
} satisfies PaletteSource;

export default palette;
