import type { PaletteSource } from "../types";

const palette = {
  name: "Trial Signal 8",
  description: "Categorical palette for treatment response groups and trial summary figures.",
  category: "categorical",
  colors: ["#1f5f78", "#d78532", "#5f8f3f", "#8a4f8f", "#b8a832", "#2f8f78", "#b84f5f", "#6f8f35"],
  recommendedFor: ["bar", "line", "boxplot"],
  tags: ["categorical", "clinical", "trial", "groups"],
  background: "white",
  source: "Original SciPalette research expansion informed by ColorBrewer-style categorical constraints."
} satisfies PaletteSource;

export default palette;
