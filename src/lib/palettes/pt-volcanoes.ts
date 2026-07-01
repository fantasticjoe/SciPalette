import type { PaletteSource } from "../types";

const palette = {
  name: "Volcanoes",
  description: "Qualitative palette “Volcanoes” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#082544", "#1E547D", "#79668C", "#DE3C37", "#F2DC7E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
