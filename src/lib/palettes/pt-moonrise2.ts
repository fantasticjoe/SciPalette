import type { PaletteSource } from "../types";

const palette = {
  name: "Moonrise2",
  description: "Qualitative palette “Moonrise2” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#798E87", "#C27D38", "#CCC591", "#29211F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
