import type { PaletteSource } from "../types";

const palette = {
  name: "MtMckinley",
  description: "Qualitative palette “MtMckinley” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D5AE63", "#6E6C81", "#F7ECD8", "#3F3939", "#93AD90", "#C9B793"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
