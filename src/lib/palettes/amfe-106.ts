import type { PaletteSource } from "../types";

const palette = {
  name: "Lancet 2",
  description: "Community-curated aesthetic palette “Lancet” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#7B95C6", "#49C2D9", "#A1D8E8", "#67A583", "#A2C986", "#D0E2C0", "#FDED95", "#FFC1A6", "#F59C7C", "#F47254", "#C85E62"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "Lancet", "多色", "渐变"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
