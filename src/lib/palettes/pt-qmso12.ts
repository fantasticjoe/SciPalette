import type { PaletteSource } from "../types";

const palette = {
  name: "qMSO12",
  description: "Qualitative palette “qMSO12” from the Redmonder collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EEECE1", "#1F497D", "#4F81BD", "#C0504D", "#9BBB59", "#8064A2", "#4BACC6", "#F79646"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "redmonder"],
  background: "white",
  source: "Redmonder (via paletteer)"
} satisfies PaletteSource;

export default palette;
