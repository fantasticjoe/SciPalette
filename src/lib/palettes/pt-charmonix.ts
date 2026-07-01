import type { PaletteSource } from "../types";

const palette = {
  name: "Charmonix",
  description: "Qualitative palette “Charmonix” from the NatParksPalettes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#008FF8", "#B6AA0D", "#E2C2A2", "#E23B0E", "#F2C621", "#196689"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "natparkspalettes"],
  background: "white",
  source: "NatParksPalettes (via paletteer)"
} satisfies PaletteSource;

export default palette;
