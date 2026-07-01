import type { PaletteSource } from "../types";

const palette = {
  name: "galah",
  description: "Diverging palette “galah” from ochRe. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#903030", "#D84860", "#F0A8C0", "#FFFFFF", "#A8A8A8", "#787878"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "ochre"],
  background: "white",
  source: "ochRe (via paletteer)"
} satisfies PaletteSource;

export default palette;
