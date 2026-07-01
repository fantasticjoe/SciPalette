import type { PaletteSource } from "../types";

const palette = {
  name: "GeorgiaOKeeffe",
  description: "Sequential palette “GeorgiaOKeeffe” from lisa. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#0E122D", "#182044", "#51628E", "#91A1BA", "#AFD0C9"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
