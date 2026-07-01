import type { PaletteSource } from "../types";

const palette = {
  name: "PeachPear",
  description: "Diverging palette “PeachPear” from LaCroixColoR. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#FF3200", "#E9A17C", "#E9E4A6", "#1BB6AF", "#0076BB", "#172869"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
