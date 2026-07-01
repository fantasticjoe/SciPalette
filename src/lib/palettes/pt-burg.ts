import type { PaletteSource } from "../types";

const palette = {
  name: "Burg",
  description: "Sequential palette “Burg” from rcartocolor. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#FFC6C4", "#F4A3A8", "#E38191", "#CC607D", "#AD466C", "#8B3058", "#672044"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
