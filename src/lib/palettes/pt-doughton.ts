import type { PaletteSource } from "../types";

const palette = {
  name: "Doughton",
  description: "Diverging palette “Doughton” from MoMAColors. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#155B51", "#216F63", "#2D8277", "#3A9387", "#45A395", "#C468B2", "#AF509C", "#803777", "#5D2155", "#45113F"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
