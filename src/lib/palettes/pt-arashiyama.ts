import type { PaletteSource } from "../types";

const palette = {
  name: "arashiyama",
  description: "Qualitative palette “arashiyama” from the werpals collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#FDFDFD", "#E9ED00", "#67BD02", "#018305", "#01AC86", "#003813", "#110101", "#B8522C", "#FF9400", "#DBD0CC"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "paletteer", "werpals"],
  background: "white",
  source: "werpals (via paletteer)"
} satisfies PaletteSource;

export default palette;
