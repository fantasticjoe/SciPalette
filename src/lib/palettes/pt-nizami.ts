import type { PaletteSource } from "../types";

const palette = {
  name: "Nizami",
  description: "Qualitative palette “Nizami” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DD7867", "#B83326", "#C8570D", "#EDB144", "#8CC8BC", "#7DA7EA", "#5773C0", "#1D4497"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
