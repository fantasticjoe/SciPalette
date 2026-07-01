import type { PaletteSource } from "../types";

const palette = {
  name: "LeeKrasner",
  description: "Qualitative palette “LeeKrasner” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#333333", "#D1B817", "#2A2996", "#B34325", "#C8CCC6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
