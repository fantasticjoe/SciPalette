import type { PaletteSource } from "../types";

const palette = {
  name: "Alkalay2",
  description: "Sequential palette “Alkalay2” from MoMAColors. Ordered light-to-dark progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#EBCF2E", "#B4BF3A", "#88AB38", "#5E9432", "#3B7D31", "#225F2F", "#244422", "#252916"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
