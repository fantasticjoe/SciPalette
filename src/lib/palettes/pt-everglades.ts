import type { PaletteSource } from "../types";

const palette = {
  name: "Everglades",
  description: "Qualitative palette “Everglades” from the nationalparkcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#91D5DE", "#2E8289", "#B4674E", "#EAAE37", "#565F41"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "nationalparkcolors"],
  background: "white",
  source: "nationalparkcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
