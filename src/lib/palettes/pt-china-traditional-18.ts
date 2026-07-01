import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 18",
  description: "Traditional Chinese color set (China Traditional 18). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#F09180", "#F3A694", "#3C4658", "#1E2D32"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
