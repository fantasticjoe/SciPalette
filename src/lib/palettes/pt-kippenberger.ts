import type { PaletteSource } from "../types";

const palette = {
  name: "Kippenberger",
  description: "Diverging palette “Kippenberger” from MoMAColors. Two-sided contrast for signed values such as log-fold-change or correlation.",
  category: "diverging",
  colors: ["#8B174D", "#AE2565", "#C1447E", "#D06C9B", "#DA9FB8", "#D9D2CC", "#ADBE7C", "#8BA749", "#6E8537", "#4F5F28", "#343D1F"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["diverging", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
