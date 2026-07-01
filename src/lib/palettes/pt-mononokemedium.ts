import type { PaletteSource } from "../types";

const palette = {
  name: "MononokeMedium",
  description: "Qualitative palette “MononokeMedium” from the ghibli collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#06141F", "#742C14", "#3D4F7D", "#657060", "#CD4F38", "#E48C2A", "#EAD890"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ghibli"],
  background: "white",
  source: "ghibli (via paletteer)"
} satisfies PaletteSource;

export default palette;
