import type { PaletteSource } from "../types";

const palette = {
  name: "森林迷雾",
  description: "Community-curated single-hue palette “森林迷雾” from color.amfe.space. Ordered progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#2B3A35", "#6C9A8C", "#A3C3B2", "#D8D8D8", "#F8F2E5"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "amfe", "curated", "森林", "迷雾", "自然", "冷淡"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
