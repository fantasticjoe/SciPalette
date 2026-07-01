import type { PaletteSource } from "../types";

const palette = {
  name: "TealRose",
  description: "Diverging palette “TealRose” from rcartocolor. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#009392", "#72AAA1", "#B1C7B3", "#F1EAC8", "#E5B9AD", "#D98994", "#D0587E"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "rcartocolor"],
  background: "white",
  source: "rcartocolor (via paletteer)"
} satisfies PaletteSource;

export default palette;
