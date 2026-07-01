import type { PaletteSource } from "../types";

const palette = {
  name: "活力对比",
  description: "Community-curated aesthetic palette “活力对比” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#6B2FD9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "鲜艳", "俏皮", "高对比", "动态"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
