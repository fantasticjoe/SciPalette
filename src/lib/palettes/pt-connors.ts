import type { PaletteSource } from "../types";

const palette = {
  name: "Connors",
  description: "Qualitative palette “Connors” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D92A05", "#F35D36", "#FC9073", "#FFBA1B", "#60CFA1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
