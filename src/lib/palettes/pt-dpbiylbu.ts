import type { PaletteSource } from "../types";

const palette = {
  name: "dPBIYlBu",
  description: "Diverging palette “dPBIYlBu” from Redmonder. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#796409", "#B6960D", "#F5D341", "#F7DE70", "#FAE9A0", "#F5F5F5", "#D0EEF7", "#B9E5F3", "#A1DDEF", "#689FB0", "#456A76"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
