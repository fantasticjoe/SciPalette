import type { PaletteSource } from "../types";

const palette = {
  name: "冬日蓝",
  description: "Community-curated single-hue palette “冬日蓝” from color.amfe.space. Ordered progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#1A6A96", "#7C9CA8", "#D2D1C4", "#F6F4F0"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "amfe", "curated", "冬日", "蓝色", "冷色调", "雪景"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
