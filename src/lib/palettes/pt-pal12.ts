import type { PaletteSource } from "../types";

const palette = {
  name: "pal12",
  description: "Sequential palette “pal12” from jcolors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#202547", "#43444A", "#5F654A", "#7B8948", "#97B043", "#B2D736", "#CEFF1A", "#D8E01B", "#DFC11B", "#E2A11B", "#E37F1B", "#E1581A", "#DE1A1A"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
