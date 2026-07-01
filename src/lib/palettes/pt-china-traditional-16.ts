import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 16",
  description: "Traditional Chinese color set (China Traditional 16). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#6D5C3D", "#313230", "#F6F9E4", "#DB9C5E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
