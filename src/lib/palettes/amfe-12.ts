import type { PaletteSource } from "../types";

const palette = {
  name: "深海探索",
  description: "Community-curated aesthetic palette “深海探索” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1D4F72", "#007B9D", "#009B77", "#1D9E8B", "#A2C8E4", "#6C9DC5", "#009688", "#00897B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "amfe", "curated", "蓝色", "绿色", "海洋", "深邃"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
