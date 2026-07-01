import type { PaletteSource } from "../types";

const palette = {
  name: "pearl2",
  description: "Qualitative palette “pearl2” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#E8A761", "#9BB3D2", "#E5938A", "#BDC1C4", "#F2CEC0"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
