import type { PaletteSource } from "../types";

const palette = {
  name: "KazimirMalevich",
  description: "Qualitative palette “KazimirMalevich” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#151817", "#001A56", "#197C3F", "#D4A821", "#C74C25"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
