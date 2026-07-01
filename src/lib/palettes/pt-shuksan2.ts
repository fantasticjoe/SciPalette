import type { PaletteSource } from "../types";

const palette = {
  name: "Shuksan2",
  description: "Diverging palette “Shuksan2” from PNWColors. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#5D74A5", "#B0CBE7", "#FEF7C7", "#EBA07E", "#A8554E"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "pnwcolors"],
  background: "white",
  source: "PNWColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
