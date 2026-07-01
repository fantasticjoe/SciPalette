import type { PaletteSource } from "../types";

const palette = {
  name: "dPBIPuGn",
  description: "Diverging palette “dPBIPuGn” from Redmonder. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#53354D", "#7D4F73", "#B887AD", "#CAA5C2", "#DBC3D6", "#F5F5F5", "#99E3DD", "#66D4CC", "#33C6BB", "#008A80", "#005C55"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
