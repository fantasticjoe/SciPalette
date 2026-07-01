import type { PaletteSource } from "../types";

const palette = {
  name: "Ingres",
  description: "Qualitative palette “Ingres” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#041D2C", "#06314E", "#18527E", "#2E77AB", "#D1B252", "#A97F2F", "#7E5522", "#472C0B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
