import type { PaletteSource } from "../types";

const palette = {
  name: "Jean MichelBasquiat 1",
  description: "Qualitative palette “Jean MichelBasquiat 1” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C11432", "#009ADA", "#66A64F", "#FDD10A", "#070707"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
