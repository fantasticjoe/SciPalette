import type { PaletteSource } from "../types";

const palette = {
  name: "Blue2DarkOrange12Steps",
  description: "Diverging palette “Blue2DarkOrange12Steps” from colorBlindness. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#1E8E99", "#51C3CC", "#99F9FF", "#B2FCFF", "#CCFEFF", "#E5FFFF", "#FFE5CC", "#FFCA99", "#FFAD65", "#FF8E32", "#CC5800", "#993F00"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "colorblindness"],
  background: "white",
  source: "colorBlindness (via paletteer)"
} satisfies PaletteSource;

export default palette;
