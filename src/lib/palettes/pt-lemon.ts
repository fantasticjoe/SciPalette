import type { PaletteSource } from "../types";

const palette = {
  name: "Lemon",
  description: "Diverging palette “Lemon” from LaCroixColoR. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#F7AA14", "#F5D000", "#F7E690", "#1BB6AF", "#088BBE", "#172869"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
