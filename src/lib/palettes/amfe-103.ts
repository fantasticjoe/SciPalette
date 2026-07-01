import type { PaletteSource } from "../types";

const palette = {
  name: "BMJ-British Medical Journal",
  description: "Community-curated aesthetic palette “BMJ-British Medical Journal” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C2D0EA", "#0070B8", "#00B3B0", "#D40D8C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "BMJ", "对比", "医疗"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
