import type { PaletteSource } from "../types";

const palette = {
  name: "秋季报告",
  description: "Community-curated aesthetic palette “秋季报告” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A0522D", "#D56D38", "#D8A86A", "#CB7635", "#E3C68E", "#E1AE6E", "#EA8B4A", "#D36A4D", "#B4593A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "amfe", "curated", "暖色", "秋天", "棕色", "橙色"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
