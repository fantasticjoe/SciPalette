import type { PaletteSource } from "../types";

const palette = {
  name: "PurpleGreens",
  description: "Diverging palette “PurpleGreens” from PrettyCols. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#420F75", "#7640A9", "#AD72D6", "#E7A8FB", "#F5F5F5", "#99CE64", "#659A32", "#326812", "#033800"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "prettycols"],
  background: "white",
  source: "PrettyCols (via paletteer)"
} satisfies PaletteSource;

export default palette;
