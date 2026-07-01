import type { PaletteSource } from "../types";

const palette = {
  name: "NeurIPS 4",
  description: "Community-curated aesthetic palette “NeurIPS” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#9677B8", "#E8D8FC", "#E31A1C", "#FB9A99", "#FDBF6F", "#B2DF8A", "#33A02C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "NeurIPS", "高饱和", "多色"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
