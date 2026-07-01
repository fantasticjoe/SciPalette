import type { PaletteSource } from "../types";

const palette = {
  name: "Purp",
  description: "Sequential palette “Purp” from rcartocolor. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F3E0F7", "#E4C7F1", "#D1AFE8", "#B998DD", "#9F82CE", "#826DBA", "#63589F"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
