import type { PaletteSource } from "../types";

const palette = {
  name: "Heatmap Yellow-Red",
  description: "Sequential heatmap gradient from light yellow to dark red. Ideal for intensity data and p-values.",
  category: "heatmap",
  colors: ["#FFFFCC", "#FFEDA0", "#FED976", "#FEB24C", "#FD8D3C", "#FC4E2A", "#E31A1C", "#BD0026", "#800026"],
  recommendedFor: ["heatmap"],
  tags: ["heatmap", "intensity", "p-value"],
  background: "white"
} satisfies PaletteSource;

export default palette;
