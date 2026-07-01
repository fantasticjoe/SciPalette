import type { PaletteSource } from "../types";

const palette = {
  name: "TangerineBlues",
  description: "Diverging palette “TangerineBlues” from PrettyCols. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#552000", "#8A4D00", "#C17D17", "#F8B150", "#F5F5F5", "#93C6E1", "#5F93AC", "#2E627A", "#00344A"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
