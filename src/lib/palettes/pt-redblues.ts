import type { PaletteSource } from "../types";

const palette = {
  name: "RedBlues",
  description: "Diverging palette “RedBlues” from PrettyCols. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#B53737", "#C66969", "#D79C9C", "#E8CFCF", "#F5F5F5", "#93C6E1", "#5F93AC", "#2E627A", "#00344A"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
