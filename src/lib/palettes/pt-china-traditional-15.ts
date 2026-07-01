import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 15",
  description: "Traditional Chinese color set (China Traditional 15). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#9BB496", "#EAD89A", "#A64036", "#509296"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
