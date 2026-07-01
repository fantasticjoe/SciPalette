import type { PaletteSource } from "../types";

const palette = {
  name: "Tropic",
  description: "Diverging palette “Tropic” from rcartocolor. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#009B9E", "#42B7B9", "#A7D3D4", "#F1F1F1", "#E4C1D9", "#D691C1", "#C75DAB"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
