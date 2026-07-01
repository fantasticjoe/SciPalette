import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 5",
  description: "Traditional Chinese color set (China Traditional 5). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#006D87", "#DD6B4F", "#535164", "#FFED6F"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
