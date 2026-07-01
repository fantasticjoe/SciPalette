import type { PaletteSource } from "../types";

const palette = {
  name: "pal10",
  description: "Sequential palette “pal10” from jcolors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#3E71A8", "#577F9F", "#698E96", "#779D8D", "#84AD83", "#8FBD77", "#99CD6B", "#A2DD5C", "#AAEE49", "#B2FF2E"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
