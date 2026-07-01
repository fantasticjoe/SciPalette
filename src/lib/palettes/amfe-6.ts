import type { PaletteSource } from "../types";

const palette = {
  name: "科技蓝",
  description: "Community-curated single-hue palette “科技蓝” from color.amfe.space. Ordered progression for continuous data and heatmaps.",
  category: "sequential",
  colors: ["#1E3A8A", "#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"],
  recommendedFor: ["heatmap", "scatter"],
  tags: ["sequential", "continuous", "amfe", "curated", "蓝色", "科技", "信任", "冷静"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
