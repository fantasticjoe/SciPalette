import type { PaletteSource } from "../types";

const palette = {
  name: "霓虹暗夜",
  description: "Community-curated aesthetic palette “霓虹暗夜” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1A1A1D", "#4ECDC4", "#F7FFF7", "#FF6F61", "#C8F9F8", "#FFE156", "#FF006E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "霓虹", "暗夜", "赛博朋克", "发光"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
