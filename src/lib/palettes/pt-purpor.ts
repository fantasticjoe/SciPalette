import type { PaletteSource } from "../types";

const palette = {
  name: "PurpOr",
  description: "Sequential palette “PurpOr” from rcartocolor. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F9DDDA", "#F2B9C4", "#E597B9", "#CE78B3", "#AD5FAD", "#834BA0", "#573B88"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
