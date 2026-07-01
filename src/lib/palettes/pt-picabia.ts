import type { PaletteSource } from "../types";

const palette = {
  name: "Picabia",
  description: "Diverging palette “Picabia” from MoMAColors. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#53362E", "#744940", "#9F7064", "#C99582", "#E6BCAC", "#E2D8D6", "#A5A6AE", "#858794", "#666879", "#515260", "#3D3D47"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
