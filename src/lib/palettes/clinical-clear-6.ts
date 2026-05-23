import type { PaletteSource } from "../types";

const palette = {
  name: "Clinical Clear 6",
  description: "Compact categorical palette for clinical groups, treatment arms, and publication bar charts.",
  category: "categorical",
  colors: ["#2f6f9f", "#c45f45", "#5d8b58", "#8a6aa3", "#c29a3d", "#3f8f8a"],
  recommendedFor: ["bar", "boxplot", "line"],
  tags: ["categorical", "clinical", "groups", "publication"],
  background: "white",
  source: "Original SciPalette research expansion informed by ColorBrewer-style categorical constraints."
} satisfies PaletteSource;

export default palette;
