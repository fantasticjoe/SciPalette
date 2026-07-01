import type { PaletteSource } from "../types";

const palette = {
  name: "eschscholzia",
  description: "Sequential palette “eschscholzia” from calecopal. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#F2B705", "#F29F05", "#F28705", "#D95204", "#A62F03"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
