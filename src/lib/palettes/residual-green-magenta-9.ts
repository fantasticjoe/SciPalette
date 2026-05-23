import type { PaletteSource } from "../types";

const palette = {
  name: "Residual Green Magenta 9",
  description: "Diverging green-to-magenta palette for residuals and balanced signed deviations.",
  category: "diverging",
  colors: ["#2f6544", "#558765", "#86aa91", "#cbd8cf", "#f4f1ec", "#dfc4d4", "#bd8aab", "#8f5c83", "#633b5f"],
  recommendedFor: ["heatmap"],
  tags: ["diverging", "residual", "green-magenta", "centered"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
