import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 4",
  description: "Traditional Chinese color set (China Traditional 4). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#7F9FAF", "#D4E5EF", "#284852", "#E2A2AC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
