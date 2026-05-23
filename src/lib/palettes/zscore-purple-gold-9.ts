import type { PaletteSource } from "../types";

const palette = {
  name: "Z-score Purple Gold 9",
  description: "Diverging purple-to-gold palette for z-scores and standardized residuals.",
  category: "diverging",
  colors: ["#4a346f", "#6f5590", "#9b85ad", "#d1c5d9", "#f5f1e8", "#e5c98f", "#c79a45", "#986f2e", "#65491f"],
  recommendedFor: ["heatmap"],
  tags: ["diverging", "z-score", "purple-gold", "centered"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
