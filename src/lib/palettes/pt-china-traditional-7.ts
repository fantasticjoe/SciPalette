import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 7",
  description: "Traditional Chinese color set (China Traditional 7). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#CE8892", "#F5F2E9", "#81474C", "#D4C1A6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
