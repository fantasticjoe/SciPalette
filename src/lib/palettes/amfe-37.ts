import type { PaletteSource } from "../types";

const palette = {
  name: "热辣暖色",
  description: "Community-curated aesthetic palette “热辣暖色” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FFC300", "#DAF7A6", "#FF5733", "#C70039", "#900C3F", "#581845"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "热辣", "暖色", "活力", "红色"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
