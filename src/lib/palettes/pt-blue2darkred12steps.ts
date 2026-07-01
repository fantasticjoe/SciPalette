import type { PaletteSource } from "../types";

const palette = {
  name: "Blue2DarkRed12Steps",
  description: "Diverging palette “Blue2DarkRed12Steps” from colorBlindness. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#290AD8", "#264DFF", "#3FA0FF", "#72D9FF", "#AAF7FF", "#E0FFFF", "#FFFFBF", "#FFE099", "#FFAD72", "#F76D5E", "#D82632", "#A50021"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "colorblindness"],
  background: "white",
  source: "colorBlindness (via paletteer)"
} satisfies PaletteSource;

export default palette;
