import type { PaletteSource } from "../types";

const palette = {
  name: "NeurIPS 2",
  description: "Community-curated aesthetic palette “NeurIPS” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#5B99C5", "#FAA256", "#BADABA", "#F0AFAF", "#C2BFD7", "#CDE0CC", "#F7BFBF", "#B1DDF0"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "NeurIPS", "柔和", "多彩"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
