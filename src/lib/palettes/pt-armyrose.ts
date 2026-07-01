import type { PaletteSource } from "../types";

const palette = {
  name: "ArmyRose",
  description: "Diverging palette “ArmyRose” from rcartocolor. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#798234", "#A3AD62", "#D0D3A2", "#FDFBE4", "#F0C6C3", "#DF91A3", "#D46780"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
