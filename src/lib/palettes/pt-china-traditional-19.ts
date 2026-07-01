import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 19",
  description: "Traditional Chinese color set (China Traditional 19). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#663D74", "#D4DDE1", "#EBEDA9", "#DD6B7B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
