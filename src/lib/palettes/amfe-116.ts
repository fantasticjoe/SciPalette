import type { PaletteSource } from "../types";

const palette = {
  name: "NeurIPS 5",
  description: "Community-curated aesthetic palette “NeurIPS” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#670373", "#528AAA", "#C00405", "#B2CDCE", "#FEFFF0", "#CAB2D7", "#78969B", "#FF878A", "#343434"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "NeurIPS", "多色", "对比"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
