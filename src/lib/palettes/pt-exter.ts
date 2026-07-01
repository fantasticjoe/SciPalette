import type { PaletteSource } from "../types";

const palette = {
  name: "Exter",
  description: "Sequential palette “Exter” from MoMAColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FFEC9D", "#FAC881", "#F4A464", "#E87444", "#D9402A", "#BF2729", "#912534", "#64243E", "#3D1B28", "#161212"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
