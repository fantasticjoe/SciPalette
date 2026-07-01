import type { PaletteSource } from "../types";

const palette = {
  name: "espresso",
  description: "Qualitative palette “espresso” from the yarrr collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#2366C0", "#E9D738", "#B91226", "#A3DA4B", "#FF6435"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "yarrr"],
  background: "white",
  source: "yarrr (via paletteer)"
} satisfies PaletteSource;

export default palette;
