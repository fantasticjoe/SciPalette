import type { PaletteSource } from "../types";

const palette = {
  name: "Avedon",
  description: "Diverging palette “Avedon” from MoMAColors. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#FF7200", "#FF8827", "#FF9C4C", "#FFB274", "#F1CAA8", "#E3E1DC", "#C2CEAA", "#A1BA77", "#8BAC54", "#7EA13E", "#648C16"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
