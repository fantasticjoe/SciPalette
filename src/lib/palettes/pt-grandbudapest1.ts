import type { PaletteSource } from "../types";

const palette = {
  name: "GrandBudapest1",
  description: "Qualitative palette “GrandBudapest1” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F1BB7B", "#FD6467", "#5B1A18", "#D67236"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
