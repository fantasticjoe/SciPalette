import type { PaletteSource } from "../types";

const palette = {
  name: "a palette",
  description: "Sequential palette “a palette” from awtools. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#2A363B", "#019875", "#99B898", "#FECEA8", "#FF847C", "#E84A5F", "#C0392B", "#96281B"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "awtools"],
  background: "white",
  source: "awtools (via paletteer)"
} satisfies PaletteSource;

export default palette;
