import type { PaletteSource } from "../types";

const palette = {
  name: "Blue Orange 8",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#6C85F9", "#939DE4", "#A2C6D6", "#BDD69F", "#D9503D", "#DEA441", "#E9B9E1", "#EBC98A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
