import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 17",
  description: "Traditional Chinese color set (China Traditional 17). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#108B96", "#1A2847", "#ED6D3D", "#F7EEDB"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
