import type { PaletteSource } from "../types";

const palette = {
  name: "Ernst",
  description: "Sequential palette “Ernst” from MoMAColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#E8E79A", "#C2D89A", "#8CBF9A", "#5FA2A4", "#477B95", "#315B88", "#24396B", "#191F40"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
