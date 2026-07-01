import type { PaletteSource } from "../types";

const palette = {
  name: "Berry",
  description: "Diverging palette “Berry” from LaCroixColoR. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#B25D91", "#CB87B4", "#EFC7E6", "#1BB6AF", "#088BBE", "#172869"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
