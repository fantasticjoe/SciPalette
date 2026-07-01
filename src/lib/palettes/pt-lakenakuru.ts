import type { PaletteSource } from "../types";

const palette = {
  name: "LakeNakuru",
  description: "Qualitative palette “LakeNakuru” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D76E9A", "#A1ACC8", "#AD3C36", "#332627", "#EACACF", "#AA6B77"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
