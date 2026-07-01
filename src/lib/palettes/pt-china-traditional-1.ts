import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 1",
  description: "Traditional Chinese color set (China Traditional 1). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#ECEBC2", "#A6BAB1", "#6CA8AF", "#6B798E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
