import type { PaletteSource } from "../types";

const palette = {
  name: "Cohort Clear 8",
  description: "Clear categorical palette for cohort comparisons that need readable color names in legends.",
  category: "categorical",
  colors: ["#1f5f88", "#d7853a", "#2f7f6f", "#9a4f7f", "#b6a23a", "#5369a6", "#c05a5a", "#5f8f3f"],
  recommendedFor: ["bar", "boxplot", "scatter"],
  tags: ["categorical", "cohort", "clinical", "accessible"],
  background: "white",
  source: "Original SciPalette research expansion informed by ColorBrewer-style categorical constraints."
} satisfies PaletteSource;

export default palette;
