import type { PaletteSource } from "../types";

const palette = {
  name: "Red Blue 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#7789B7", "#89AA7B", "#9DACCB", "#ACBF9F", "#C6CCBC", "#CBD7C3", "#D6D6D6", "#EB6969", "#F0EEEF"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
