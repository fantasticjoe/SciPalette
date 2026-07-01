import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 9",
  description: "Traditional Chinese color set (China Traditional 9). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#927B87", "#576470", "#9E4E56", "#ECDFC7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
