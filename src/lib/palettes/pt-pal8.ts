import type { PaletteSource } from "../types";

const palette = {
  name: "pal8",
  description: "Qualitative palette “pal8” from the jcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#943CB4", "#194D44", "#C6CF6E", "#5B6DC8", "#3CA437", "#6B244C", "#6ACDC5", "#DE1A1A", "#BBB53E", "#2A297A", "#995533", "#D590DA"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
