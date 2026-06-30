import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Pink 8",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#34183E", "#4D779B", "#585D5E", "#606060", "#82093B", "#C45C69", "#CD3B42", "#FFC04D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
