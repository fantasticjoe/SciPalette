import type { PaletteSource } from "../types";

const palette = {
  name: "Flat UI",
  description: "Flat UI discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#C0392B", "#D35400", "#F39C12", "#27AE60", "#16A085", "#2980B9", "#8E44AD", "#2C3E50", "#7F8C8D", "#BDC3C7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
