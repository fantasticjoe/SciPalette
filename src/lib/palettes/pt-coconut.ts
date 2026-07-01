import type { PaletteSource } from "../types";

const palette = {
  name: "Coconut",
  description: "Diverging palette “Coconut” from LaCroixColoR. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#881C00", "#AF6125", "#F4E3C7", "#1BB6AF", "#0076BB", "#172869"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
