import type { PaletteSource } from "../types";

const palette = {
  name: "蓝色渐变",
  description: "Community-curated aesthetic palette “蓝色渐变” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E3CFC0", "#F6F2ED", "#A8C8E1", "#8AB8D5", "#4A9BC9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "蓝色", "渐变", "清新", "天空"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
