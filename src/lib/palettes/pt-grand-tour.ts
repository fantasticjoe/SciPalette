import type { PaletteSource } from "../types";

const palette = {
  name: "grand tour",
  description: "Qualitative palette “grand tour” from the futurevisions collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#418D87", "#2B5E3D", "#73224E", "#AD2E37", "#E37D41", "#E9A144", "#F6EBD1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
