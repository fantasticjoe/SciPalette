import type { PaletteSource } from "../types";

const palette = {
  name: "vatnajokull",
  description: "Qualitative palette “vatnajokull” from the werpals collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FEFEFE", "#D7E8F8", "#9AC5E8", "#00F7FF", "#00C6FF", "#0090FF", "#0142FE", "#002969", "#566199", "#B7BAF3"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "werpals"],
  background: "white",
  source: "werpals (via paletteer)"
} satisfies PaletteSource;

export default palette;
