import type { PaletteSource } from "../types";

const palette = {
  name: "海洋深度",
  description: "Community-curated single-hue palette “海洋深度” from color.amfe.space. Ordered progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#A0D8E6", "#79B2C9", "#5A8DAB", "#367388", "#1F5360"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "amfe", "curated", "海洋", "蓝色", "深度", "渐变"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
