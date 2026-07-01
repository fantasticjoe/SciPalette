import type { PaletteSource } from "../types";

const palette = {
  name: "Althoff",
  description: "Sequential palette “Althoff” from MoMAColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FF9898", "#D9636C", "#A91E45", "#691238", "#251714"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
