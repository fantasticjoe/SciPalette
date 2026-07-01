import type { PaletteSource } from "../types";

const palette = {
  name: "Triglav",
  description: "Qualitative palette “Triglav” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#386EC2", "#B5B5B2", "#990006", "#625D0A", "#B9741F", "#213958"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
