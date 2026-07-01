import type { PaletteSource } from "../types";

const palette = {
  name: "OskarSchlemmer",
  description: "Diverging palette “OskarSchlemmer” from lisa. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#3A488A", "#8785B2", "#DABD61", "#D95F30", "#BE3428"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
