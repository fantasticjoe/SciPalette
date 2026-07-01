import type { PaletteSource } from "../types";

const palette = {
  name: "深蓝灰",
  description: "Community-curated single-hue palette “深蓝灰” from color.amfe.space. Ordered progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#1E3A78", "#FFFFFF", "#C4C4C4", "#B0B0B0", "#101C39"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "amfe", "curated", "深蓝", "灰色", "工业", "机械"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
