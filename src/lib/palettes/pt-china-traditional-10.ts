import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 10",
  description: "Traditional Chinese color set (China Traditional 10). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#15092A", "#125A7B", "#3271AE", "#BCD4E7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
