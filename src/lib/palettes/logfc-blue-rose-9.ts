import type { PaletteSource } from "../types";

const palette = {
  name: "logFC Blue Rose 9",
  description: "Diverging blue-to-rose palette centered on off-white for log fold-change and signed effects.",
  category: "diverging",
  colors: ["#214f73", "#3f7194", "#6f98b0", "#b9d1dc", "#f5f2ec", "#e6c0be", "#cc8a8a", "#a95862", "#7a3345"],
  recommendedFor: ["heatmap", "volcano"],
  tags: ["diverging", "logfc", "effect-size", "blue-rose"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
