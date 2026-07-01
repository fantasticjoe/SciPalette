import type { PaletteSource } from "../types";

const palette = {
  name: "sPBIYlGn",
  description: "Sequential palette “sPBIYlGn” from Redmonder. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FAE9A0", "#DBD797", "#BCC68D", "#9CB484", "#7DA37B", "#5E9171", "#3F7F68", "#1F6E5E", "#005C55"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
