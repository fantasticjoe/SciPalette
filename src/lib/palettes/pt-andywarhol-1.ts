import type { PaletteSource } from "../types";

const palette = {
  name: "AndyWarhol 1",
  description: "Qualitative palette “AndyWarhol 1” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FD0C81", "#FFED4D", "#C34582", "#EBA49E", "#272324"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
