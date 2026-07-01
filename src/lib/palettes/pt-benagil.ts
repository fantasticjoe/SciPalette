import type { PaletteSource } from "../types";

const palette = {
  name: "benagil",
  description: "Qualitative palette “benagil” from the werpals collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F5F5E9", "#B6CBDC", "#8BA2B4", "#3A749C", "#00517C", "#030710", "#500A02", "#C05100", "#FBA23C", "#FFED77"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "werpals"],
  background: "white",
  source: "werpals (via paletteer)"
} satisfies PaletteSource;

export default palette;
