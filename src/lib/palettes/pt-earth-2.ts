import type { PaletteSource } from "../types";

const palette = {
  name: "Earth",
  description: "Diverging palette “Earth” from rcartocolor. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#A16928", "#BD925A", "#D6BD8D", "#EDEAC2", "#B5C8B8", "#79A7AC", "#2887A1"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
