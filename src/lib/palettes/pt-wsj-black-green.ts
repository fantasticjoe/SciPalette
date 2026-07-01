import type { PaletteSource } from "../types";

const palette = {
  name: "wsj black green",
  description: "Qualitative palette “wsj black green” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#595959", "#59A77F", "#008856"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
