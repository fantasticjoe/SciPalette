import type { PaletteSource } from "../types";

const palette = {
  name: "Green2Magenta16Steps",
  description: "Diverging palette “Green2Magenta16Steps” from colorBlindness. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#005000", "#008600", "#00BB00", "#00F100", "#50FF50", "#86FF86", "#BBFFBB", "#FFFFFF", "#FFF1FF", "#FFBBFF", "#FF86FF", "#FF50FF", "#F100F1", "#BB00BB", "#860086", "#500050"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "colorblindness"],
  background: "white",
  source: "colorBlindness (via paletteer)"
} satisfies PaletteSource;

export default palette;
