import type { PaletteSource } from "../types";

const palette = {
  name: "Alkalay1",
  description: "Sequential palette “Alkalay1” from MoMAColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#241D1D", "#5B2125", "#8D3431", "#BF542E", "#E9A800"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
