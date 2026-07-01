import type { PaletteSource } from "../types";

const palette = {
  name: "cancri",
  description: "Sequential palette “cancri” from futurevisions. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#343854", "#8C384D", "#CF2438", "#D95E31", "#F0C742", "#F8F0E5"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
