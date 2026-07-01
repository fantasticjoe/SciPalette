import type { PaletteSource } from "../types";

const palette = {
  name: "Hawaii",
  description: "Qualitative palette “Hawaii” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D67B44", "#34273B", "#D95B42", "#150718", "#F2E191"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
