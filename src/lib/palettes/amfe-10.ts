import type { PaletteSource } from "../types";

const palette = {
  name: "复杂大地",
  description: "Community-curated aesthetic palette “复杂大地” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F2E3B2", "#F9DCA4", "#FFE3B4", "#F6C8A7", "#E0A48E", "#D2B6B1", "#D4C7B4", "#E3B3B5", "#D0E3D1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "amfe", "curated", "大地", "复杂", "自然", "温暖"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
