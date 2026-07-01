import type { PaletteSource } from "../types";

const palette = {
  name: "Blue2Gray8Steps",
  description: "Diverging palette “Blue2Gray8Steps” from colorBlindness. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#0099CC", "#66E5FF", "#99FFFF", "#CCFFFF", "#E5E5E5", "#999999", "#666666", "#333333"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "colorblindness"],
  background: "white",
  source: "colorBlindness (via paletteer)"
} satisfies PaletteSource;

export default palette;
