import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 6",
  description: "Traditional Chinese color set (China Traditional 6). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#12084F", "#3271AE", "#D4E5EF", "#F5F3F2"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
