import type { PaletteSource } from "../types";

const palette = {
  name: "Blue2Orange10Steps",
  description: "Diverging palette “Blue2Orange10Steps” from colorBlindness. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#0054FF", "#3299FF", "#65CCFF", "#99EDFF", "#CCFFFF", "#FFFFCC", "#FFEE99", "#FFCC65", "#FF9932", "#FF5500"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "colorblindness"],
  background: "white",
  source: "colorBlindness (via paletteer)"
} satisfies PaletteSource;

export default palette;
