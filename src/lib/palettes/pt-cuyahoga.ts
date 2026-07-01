import type { PaletteSource } from "../types";

const palette = {
  name: "Cuyahoga",
  description: "Qualitative palette “Cuyahoga” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E07529", "#FAAE32", "#7F7991", "#A84A00", "#5D4F36", "#B39085"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
