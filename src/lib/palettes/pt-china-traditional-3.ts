import type { PaletteSource } from "../types";

const palette = {
  name: "China Traditional 3",
  description: "Traditional Chinese color set (China Traditional 3). Harmonious, culturally-grounded hues for categorical figures.",
  category: "categorical",
  colors: ["#49949C", "#12265F", "#FAC861", "#EA5512"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "chinese-traditional"],
  background: "white",
  source: "Chinese traditional colors — bioinformatics.com.cn"
} satisfies PaletteSource;

export default palette;
