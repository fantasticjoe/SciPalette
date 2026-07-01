import type { PaletteSource } from "../types";

const palette = {
  name: "bryce",
  description: "Qualitative palette “bryce” from the werpals collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#9AD1EB", "#0097D6", "#A79998", "#032129", "#B98F00", "#883F39", "#FF692C", "#FFC78E", "#F5CEAF", "#F6F5F1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "werpals"],
  background: "white",
  source: "werpals (via paletteer)"
} satisfies PaletteSource;

export default palette;
