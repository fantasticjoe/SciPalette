import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 8",
  description: "Traditional Chinese color set (China Traditional 8). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#1A2847", "#4182A4", "#87C0CA", "#B1D5C8"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
