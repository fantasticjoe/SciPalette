import type { PaletteSource } from "../types";

const palette = {
  name: "Rembrandt",
  description: "Qualitative palette “Rembrandt” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DBC99A", "#A68329", "#5B5224", "#8A350C", "#090A04"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
