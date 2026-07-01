import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 14",
  description: "Traditional Chinese color set (China Traditional 14). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#EBEDE9", "#EE795A", "#53506C", "#99BCAC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
