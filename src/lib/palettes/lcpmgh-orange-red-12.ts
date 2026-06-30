import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Red 12",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#7895C1", "#8074C8", "#992224", "#A8CBDF", "#B54764", "#D6EFF4", "#E3625D", "#EF8B67", "#F0C284", "#F2FAFC", "#F5EBAE", "#F7FBC9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
