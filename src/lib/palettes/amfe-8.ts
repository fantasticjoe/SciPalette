import type { PaletteSource } from "../types";

const palette = {
  name: "柔和研究",
  description: "Community-curated aesthetic palette “柔和研究” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F5C4B6", "#FFE3B3", "#BAE1F2", "#FF6B6B", "#FFD700"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "柔和", "温暖", "淡雅", "舒适"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
