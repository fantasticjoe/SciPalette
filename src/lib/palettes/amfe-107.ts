import type { PaletteSource } from "../types";

const palette = {
  name: "ADVANCED MATERIALS",
  description: "Community-curated aesthetic palette “ADVANCED MATERIALS” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#0A6DAF", "#A72061", "#926AAD", "#059244", "#AC5326", "#848385", "#D4E5F4", "#FBB9BA", "#F5EBF4", "#C2E3D0", "#F6E4D0", "#C9C9C9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "amfe", "curated", "顶刊/会议真实案例", "Advanced Materials", "多色", "复杂"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
