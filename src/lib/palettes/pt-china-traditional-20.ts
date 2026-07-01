import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 20",
  description: "Traditional Chinese color set (China Traditional 20). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#15092A", "#D23A18", "#E5A84B", "#5DA39D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
