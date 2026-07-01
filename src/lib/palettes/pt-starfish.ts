import type { PaletteSource } from "../types";

const palette = {
  name: "Starfish",
  description: "Sequential palette “Starfish” from PNWColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#24492E", "#015B58", "#2C6184", "#59629B", "#89689D", "#BA7999", "#E69B99"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "pnwcolors"],
  background: "white",
  source: "PNWColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
