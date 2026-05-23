import type { PaletteSource } from "../types";

const palette = {
  name: "Pseudotime Amber 8",
  description: "Sequential amber palette for ordered trajectories, pseudotime, and progression scores.",
  category: "sequential",
  colors: ["#fbf7ed", "#f2e5c4", "#e6cf91", "#d7b35f", "#c19236", "#9f7125", "#7a541d", "#593b17"],
  recommendedFor: ["scatter", "heatmap"],
  tags: ["sequential", "pseudotime", "amber", "trajectory"],
  background: "white",
  source: "Original SciPalette research expansion informed by perceptual sequential colormap guidance."
} satisfies PaletteSource;

export default palette;
