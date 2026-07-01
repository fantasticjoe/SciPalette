import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 12",
  description: "Traditional Chinese color set (China Traditional 12). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#327888", "#5DA39D", "#FED25E", "#F5F3F2"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
