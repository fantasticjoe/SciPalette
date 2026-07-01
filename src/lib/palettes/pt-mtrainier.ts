import type { PaletteSource } from "../types";

const palette = {
  name: "MtRainier",
  description: "Qualitative palette “MtRainier” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#466D53", "#83CDC0", "#D3A3A1", "#A79CA5", "#FBEAD6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
