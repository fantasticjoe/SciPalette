import type { PaletteSource } from "../types";

const palette = {
  name: "Cavalcanti1",
  description: "Qualitative palette “Cavalcanti1” from the wesanderson collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D8B70A", "#02401B", "#A2A475", "#81A88D", "#972D15"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "wesanderson"],
  background: "white",
  source: "wesanderson (via paletteer)"
} satisfies PaletteSource;

export default palette;
