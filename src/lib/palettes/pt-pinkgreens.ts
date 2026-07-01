import type { PaletteSource } from "../types";

const palette = {
  name: "PinkGreens",
  description: "Diverging palette “PinkGreens” from PrettyCols. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#7F0038", "#C31E6E", "#EF5FAF", "#FCAADE", "#F5F5F5", "#99CE64", "#659A32", "#326812", "#033800"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
