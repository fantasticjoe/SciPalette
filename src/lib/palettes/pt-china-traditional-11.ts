import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 11",
  description: "Traditional Chinese color set (China Traditional 11). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#A64036", "#ECD452", "#355869", "#B2B6B6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
