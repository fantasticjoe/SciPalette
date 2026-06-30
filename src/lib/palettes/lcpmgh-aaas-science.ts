import type { PaletteSource } from "../types";

const palette = {
  name: "AAAS (Science)",
  description: "Discrete qualitative palette in the AAAS (Science) journal style, as packaged in ggsci. Ideal for multi-group comparisons in publication figures.",
  category: "categorical",
  colors: ["#3B4992", "#EE0000", "#008B45", "#631879", "#008280", "#BB0021", "#5F559B", "#A20056", "#808180", "#1B1919"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["publication", "categorical", "multi-group", "lcpmgh", "journal"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
