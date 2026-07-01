import type { PaletteSource } from "../types";

const palette = {
  name: "Flash",
  description: "Sequential palette “Flash” from MoMAColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#E3C0DB", "#DB95CB", "#CD64B5", "#B83D9F", "#900C7E", "#680369", "#41045A", "#140E3A"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
