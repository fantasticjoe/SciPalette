import type { PaletteSource } from "../types";

const palette = {
  name: "Moth",
  description: "Qualitative palette “Moth” from the PNWColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#4A3A3B", "#984136", "#C26A7A", "#ECC0A1", "#F0F0E4"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "pnwcolors"],
  background: "white",
  source: "PNWColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
