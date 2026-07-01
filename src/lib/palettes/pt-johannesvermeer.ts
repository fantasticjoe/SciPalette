import type { PaletteSource } from "../types";

const palette = {
  name: "JohannesVermeer",
  description: "Qualitative palette “JohannesVermeer” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#0C0B10", "#707DA6", "#CCAD9D", "#B08E4A", "#863B34"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
