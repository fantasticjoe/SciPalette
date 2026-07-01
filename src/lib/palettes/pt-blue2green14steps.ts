import type { PaletteSource } from "../types";

const palette = {
  name: "Blue2Green14Steps",
  description: "Diverging palette “Blue2Green14Steps” from colorBlindness. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#0000FF", "#3333FF", "#6565FF", "#9999FF", "#B2B2FF", "#CBCBFF", "#E5E5FF", "#E5FFE5", "#CBFFCB", "#B2FFB2", "#99FF99", "#65FF65", "#33FF33", "#00FF00"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "colorblindness"],
  background: "white",
  source: "colorBlindness (via paletteer)"
} satisfies PaletteSource;

export default palette;
