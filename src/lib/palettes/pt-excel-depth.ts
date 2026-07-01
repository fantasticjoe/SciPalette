import type { PaletteSource } from "../types";

const palette = {
  name: "excel Depth",
  description: "Qualitative palette “excel Depth” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#41AEBD", "#97E9D5", "#A2CF49", "#608F3D", "#F4DE3A", "#FCB11C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
