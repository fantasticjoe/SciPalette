import type { PaletteSource } from "../types";

const palette = {
  name: "赛博朋克",
  description: "Community-curated aesthetic palette “赛博朋克” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1A1A2E", "#16213E", "#0F3460", "#00A8E1", "#00B2D2", "#E94560", "#F9F9F9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "赛博朋克", "科技", "未来", "故障风"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
