import type { PaletteSource } from "../types";

const palette = {
  name: "purple material",
  description: "Sequential palette “purple material” from ggsci. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F3E5F5", "#E1BEE7", "#CE93D8", "#BA68C8", "#AB47BC", "#9C27B0", "#8E24AA", "#7B1FA2", "#6A1B9A", "#4A148C"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "ggsci"],
  background: "white",
  source: "ggsci (via paletteer)"
} satisfies PaletteSource;

export default palette;
