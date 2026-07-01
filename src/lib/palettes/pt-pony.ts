import type { PaletteSource } from "../types";

const palette = {
  name: "pony",
  description: "Qualitative palette “pony” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EB5291", "#FBBB68", "#F5BACF", "#9DDAF5", "#6351A0", "#ECF1F4", "#FEF79E", "#1794CE", "#972C8D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
