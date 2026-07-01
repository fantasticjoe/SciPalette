import type { PaletteSource } from "../types";

const palette = {
  name: "TealGreens",
  description: "Diverging palette “TealGreens” from PrettyCols. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#00393A", "#0A6969", "#2D9C9C", "#6DCFCF", "#F5F5F5", "#99CE64", "#659A32", "#326812", "#033800"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
