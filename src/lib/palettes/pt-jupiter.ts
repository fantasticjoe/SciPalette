import type { PaletteSource } from "../types";

const palette = {
  name: "jupiter",
  description: "Qualitative palette “jupiter” from the futurevisions collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#882B6A", "#EB9FAF", "#4E9678", "#303251", "#0C0D0E", "#BDC1D4"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
