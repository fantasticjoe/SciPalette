import type { PaletteSource } from "../types";

const palette = {
  name: "pal3",
  description: "Qualitative palette “pal3” from the jcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#66CD00", "#009ACD", "#FF4500", "#9A32CD", "#F5E400"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
