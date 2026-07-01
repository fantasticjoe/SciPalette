import type { PaletteSource } from "../types";

const palette = {
  name: "Isfahan1",
  description: "Qualitative palette “Isfahan1” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#4E3910", "#845D29", "#AE8548", "#E3C28B", "#4FB6CA", "#178F92", "#175F5D", "#054544"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
