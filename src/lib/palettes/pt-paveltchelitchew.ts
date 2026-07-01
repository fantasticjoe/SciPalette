import type { PaletteSource } from "../types";

const palette = {
  name: "PavelTchelitchew",
  description: "Qualitative palette “PavelTchelitchew” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#AC2527", "#F8CC5A", "#5C8447", "#61221A", "#2B4868"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
