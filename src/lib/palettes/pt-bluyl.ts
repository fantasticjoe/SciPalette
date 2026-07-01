import type { PaletteSource } from "../types";

const palette = {
  name: "BluYl",
  description: "Sequential palette “BluYl” from rcartocolor. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F7FEAE", "#B7E6A5", "#7CCBA2", "#46AEA0", "#089099", "#00718B", "#045275"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
