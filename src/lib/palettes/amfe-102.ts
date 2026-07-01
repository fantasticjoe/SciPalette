import type { PaletteSource } from "../types";

const palette = {
  name: "SCIENCE",
  description: "Community-curated aesthetic palette “SCIENCE” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#BD4DA3", "#8182BA", "#B58581", "#88C6E2", "#FBF065", "#C5E4E7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "Science", "柔和", "淡雅"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
