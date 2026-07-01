import type { PaletteSource } from "../types";

const palette = {
  name: "Lake",
  description: "Sequential palette “Lake” from PNWColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#362904", "#54450F", "#45681E", "#4A9152", "#64A8A8", "#85B6CE", "#CDE5F9", "#EEF3FF"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "pnwcolors"],
  background: "white",
  source: "PNWColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
