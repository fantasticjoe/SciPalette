import type { PaletteSource } from "../types";

const palette = {
  name: "healthy reef",
  description: "Qualitative palette “healthy reef” from the ochRe collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F63B32", "#E37870", "#F3FF41", "#005487", "#52BCD4", "#679C40", "#F3FBFB", "#1C0608", "#002B52"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "ochre"],
  background: "white",
  source: "ochRe (via paletteer)"
} satisfies PaletteSource;

export default palette;
