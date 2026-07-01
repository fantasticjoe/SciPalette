import type { PaletteSource } from "../types";

const palette = {
  name: "few Dark",
  description: "Qualitative palette “few Dark” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#265DAB", "#DF5C24", "#059748", "#E5126F", "#9D722A", "#7B3A96", "#C7B42E", "#CB2027"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
