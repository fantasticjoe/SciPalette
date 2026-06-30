import type { PaletteSource } from "../types";

const palette = {
  name: "JAMA",
  description: "Discrete qualitative palette in the JAMA journal style, as packaged in ggsci. Ideal for multi-group comparisons in publication figures.",
  category: "categorical",
  colors: ["#374E55", "#DF8F44", "#00A1D5", "#B24745", "#79AF97", "#6A6599", "#80796B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["publication", "categorical", "multi-group", "lcpmgh", "journal"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
