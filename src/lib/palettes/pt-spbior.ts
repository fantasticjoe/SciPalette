import type { PaletteSource } from "../types";

const palette = {
  name: "sPBIOr",
  description: "Sequential palette “sPBIOr” from Redmonder. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FDF5F1", "#EDE0D9", "#DECBC2", "#CEB5AA", "#BEA092", "#AE8B7A", "#9F7663", "#8F604B", "#7F4B33"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
