import type { PaletteSource } from "../types";

const palette = {
  name: "calc",
  description: "Qualitative palette “calc” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#004586", "#FF420E", "#FFD320", "#579D1C", "#7E0021", "#83CAFF", "#314004", "#AECF00", "#4B1F6F", "#FF950E", "#C5000B", "#0084D1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
