import type { PaletteSource } from "../types";

const palette = {
  name: "SolLeWitt",
  description: "Qualitative palette “SolLeWitt” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#0A71B6", "#F9C40A", "#190506", "#EB5432", "#EAF2F0"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
