import type { PaletteSource } from "../types";

const palette = {
  name: "CapitolReef",
  description: "Qualitative palette “CapitolReef” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#291919", "#532A34", "#7C5467", "#878195", "#AEB2B7", "#D4D9DD"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
