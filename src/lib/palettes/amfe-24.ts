import type { PaletteSource } from "../types";

const palette = {
  name: "北欧暗色",
  description: "Community-curated aesthetic palette “北欧暗色” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#2E3440", "#D8DEE9", "#B48EAD", "#A3BE8C", "#BF616A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "北欧", "暗色", "高级", "深沉"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
