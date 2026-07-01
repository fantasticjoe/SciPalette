import type { PaletteSource } from "../types";

const palette = {
  name: "Relax",
  description: "Qualitative palette “Relax” from the PrettyCols collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#4B3F72", "#CBB3BF", "#FFC857", "#119DA4", "#19647E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
