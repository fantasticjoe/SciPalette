import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 13",
  description: "Traditional Chinese color set (China Traditional 13). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#F8E772", "#E5A84B", "#B04558", "#422256"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
