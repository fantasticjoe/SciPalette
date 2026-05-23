import type { PaletteSource } from "../types";

const palette = {
  name: "Colorblind Safe 8",
  description: "Scientifically validated palette safe for all types of color vision deficiency. Recommended for maximum accessibility.",
  category: "categorical",
  colors: ["#0173B2", "#DE8F05", "#029E73", "#CC78BC", "#CA9161", "#949494", "#ECE133", "#56B4E9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["colorblind-safe", "accessible", "universal"],
  colorblindSafe: true,
  background: "white",
  source: "Based on colorblind-safe color theory"
} satisfies PaletteSource;

export default palette;
