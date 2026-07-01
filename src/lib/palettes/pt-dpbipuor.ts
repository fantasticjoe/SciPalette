import type { PaletteSource } from "../types";

const palette = {
  name: "dPBIPuOr",
  description: "Diverging palette “dPBIPuOr” from Redmonder. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#53354D", "#7D4F73", "#B887AD", "#CAA5C2", "#DBC3D6", "#F5F5F5", "#FFD5C2", "#FEC0A3", "#FEAB85", "#BF714D", "#7F4B33"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
