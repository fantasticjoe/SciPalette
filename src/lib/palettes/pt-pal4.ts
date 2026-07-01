import type { PaletteSource } from "../types";

const palette = {
  name: "pal4",
  description: "Qualitative palette “pal4” from the jcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#202547", "#53354A", "#7A6C5D", "#BE3144", "#FF7844", "#E3D26F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
