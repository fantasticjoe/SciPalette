import type { PaletteSource } from "../types";

const palette = {
  name: "ppalette",
  description: "Qualitative palette “ppalette” from the awtools collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F7DC05", "#3D98D3", "#EC0B88", "#5E35B1", "#F9791E", "#3DD378", "#C6C6C6", "#444444"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "awtools"],
  background: "white",
  source: "awtools (via paletteer)"
} satisfies PaletteSource;

export default palette;
