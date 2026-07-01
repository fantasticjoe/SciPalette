import type { PaletteSource } from "../types";

const palette = {
  name: "工业单色",
  description: "Community-curated aesthetic palette “工业单色” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1F2937", "#4B5563", "#6B7280", "#9CA3AF", "#E5E7EB"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "干净", "极简", "灰阶", "界面"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
