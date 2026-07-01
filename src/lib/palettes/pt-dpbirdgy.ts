import type { PaletteSource } from "../types";

const palette = {
  name: "dPBIRdGy",
  description: "Diverging palette “dPBIRdGy” from Redmonder. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#7F312F", "#BE4A47", "#FD817E", "#FEA19E", "#FEC0BF", "#F5F5F5", "#AFB5B6", "#879092", "#5F6B6D", "#293537", "#1C2325"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
