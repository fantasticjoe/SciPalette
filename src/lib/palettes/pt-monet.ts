import type { PaletteSource } from "../types";

const palette = {
  name: "monet",
  description: "Sequential palette “monet” from werpals. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#08221C", "#113719", "#36611B", "#72972F", "#A4B77D", "#CDC597"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "werpals"],
  background: "white",
  source: "werpals (via paletteer)"
} satisfies PaletteSource;

export default palette;
