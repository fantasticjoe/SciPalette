import type { PaletteSource } from "../types";

const palette = {
  name: "lupinus",
  description: "Diverging palette “lupinus” from calecopal. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#6C568C", "#9386A6", "#BFCDD9", "#7F8C72", "#607345"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
