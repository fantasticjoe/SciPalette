import type { PaletteSource } from "../types";

const palette = {
  name: "Lime",
  description: "Diverging palette “Lime” from LaCroixColoR. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#2CB11B", "#95C65C", "#BDDE9B", "#1BB6AF", "#0076C0", "#172869"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
