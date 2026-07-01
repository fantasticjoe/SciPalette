import type { PaletteSource } from "../types";

const palette = {
  name: "Brown2Blue10Steps",
  description: "Diverging palette “Brown2Blue10Steps” from colorBlindness. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#662F00", "#996035", "#CC9B7A", "#D8AF97", "#F2DACD", "#CCFDFF", "#99F8FF", "#65EFFF", "#32E3FF", "#00A9CC"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "colorblindness"],
  background: "white",
  source: "colorBlindness (via paletteer)"
} satisfies PaletteSource;

export default palette;
