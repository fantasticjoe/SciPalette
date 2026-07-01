import type { PaletteSource } from "../types";

const palette = {
  name: "Anemone",
  description: "Diverging palette “Anemone” from PNWColors. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#009474", "#11C2B5", "#72E1E1", "#F1F4EE", "#EFDDCF", "#DCBE9B", "#B0986C"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "pnwcolors"],
  background: "white",
  source: "PNWColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
