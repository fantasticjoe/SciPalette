import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 2",
  description: "Traditional Chinese color set (China Traditional 2). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#A64036", "#F0C2A2", "#4182A4", "#355879"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
