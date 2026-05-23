import type { PaletteSource } from "../types";

const palette = {
  name: "Response Cyan Crimson 9",
  description: "Diverging cyan-to-crimson palette for treatment response and centered clinical effects.",
  category: "diverging",
  colors: ["#1f5f70", "#3f7f92", "#76a9b5", "#c3d9de", "#f5f1ec", "#e7bfc2", "#cf858d", "#a84f62", "#733142"],
  recommendedFor: ["heatmap", "volcano", "bar"],
  tags: ["diverging", "response", "cyan-crimson", "clinical"],
  background: "white",
  source: "Original SciPalette research expansion informed by diverging colormap guidance."
} satisfies PaletteSource;

export default palette;
