import type { PaletteSource } from "../types";

const palette = {
  name: "C M Coolidge",
  description: "Diverging palette “C M Coolidge” from lisa. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#204035", "#4A7169", "#BEB59C", "#735231", "#49271B"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
