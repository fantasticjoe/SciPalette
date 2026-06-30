import type { PaletteSource } from "../types";

const palette = {
  name: "Indigo Red 8",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#38917E", "#3C518F", "#4D0085", "#989ED9", "#A1D4A2", "#A47DC0", "#C6A550", "#DB7272"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
