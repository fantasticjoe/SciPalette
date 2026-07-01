import type { PaletteSource } from "../types";

const palette = {
  name: "MiltonAvery 1",
  description: "Qualitative palette “MiltonAvery 1” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E2CACD", "#2E7CA8", "#F1C061", "#DA7338", "#741D13"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
