import type { PaletteSource } from "../types";

const palette = {
  name: "Moreau",
  description: "Qualitative palette “Moreau” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#421600", "#792504", "#BC7524", "#8DADCA", "#527BAA", "#104839", "#082844"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
