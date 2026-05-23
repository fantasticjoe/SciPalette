import type { PaletteSource } from "../types";

const palette = {
  name: "Module Rose 7",
  description: "Sequential rose palette for module scores, signatures, and smooth feature plots.",
  category: "sequential",
  colors: ["#fbf4f5", "#efd9dd", "#e1b9c0", "#cf919d", "#b86878", "#964758", "#6f2f3f"],
  recommendedFor: ["scatter", "heatmap"],
  tags: ["sequential", "module-score", "rose", "continuous"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
