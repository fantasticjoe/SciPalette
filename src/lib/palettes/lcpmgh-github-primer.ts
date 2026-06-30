import type { PaletteSource } from "../types";

const palette = {
  name: "GitHub Primer",
  description: "GitHub Primer discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#006EDB", "#EB670F", "#DF0C24", "#179B9B", "#30A147", "#894CEB", "#B88700", "#CE2C85", "#856D4C", "#527A29", "#D43511", "#167E53", "#9D615C", "#64762D", "#A830E8", "#866E04", "#808FA3"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
