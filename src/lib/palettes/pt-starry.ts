import type { PaletteSource } from "../types";

const palette = {
  name: "starry",
  description: "Qualitative palette “starry” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#000000", "#042E3D", "#765A22", "#44726D", "#9A9343"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
