import type { PaletteSource } from "../types";

const palette = {
  name: "NeurIPS 3",
  description: "Community-curated aesthetic palette “NeurIPS” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#750014", "#E3CCD0", "#CCECDB", "#7F3F98", "#FFDE17", "#587E92", "#37A537", "#E46240"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "NeurIPS", "高对比", "多色"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
