import type { PaletteSource } from "../types";

const palette = {
  name: "JohnSingerSargent",
  description: "Qualitative palette “JohnSingerSargent” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B43A35", "#3E501E", "#F8F2F4", "#6B381D", "#20242D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
