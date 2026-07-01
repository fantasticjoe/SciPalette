import type { PaletteSource } from "../types";

const palette = {
  name: "pan",
  description: "Qualitative palette “pan” from the werpals collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#27552D", "#E46538", "#96BB77", "#E5E36E", "#E6A19F", "#159EB7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "werpals"],
  background: "white",
  source: "werpals (via paletteer)"
} satisfies PaletteSource;

export default palette;
