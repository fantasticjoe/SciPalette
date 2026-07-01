import type { PaletteSource } from "../types";

const palette = {
  name: "数据可视化",
  description: "Community-curated aesthetic palette “数据可视化” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A4C8E1", "#303C43", "#F8B400", "#F26B59", "#FFC0CB"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "对比", "数据", "图表", "报告"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
