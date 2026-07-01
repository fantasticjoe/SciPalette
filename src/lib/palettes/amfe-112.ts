import type { PaletteSource } from "../types";

const palette = {
  name: "NeurIPS",
  description: "Community-curated aesthetic palette “NeurIPS” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E1D5E7", "#EA98C9", "#8CA0CB", "#69B27A", "#E5B09E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "NeurIPS", "柔和", "多色"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
