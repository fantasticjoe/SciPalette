import type { PaletteSource } from "../types";

const palette = {
  name: "Orange Cyan 9",
  description: "Community-curated aesthetic palette from the lcpmgh scientific color collection. Balanced hues for clean multi-group categorical figures.",
  category: "categorical",
  colors: ["#00BBF9", "#1E90FF", "#22A884", "#22A884", "#2A788E", "#4AAC44", "#7AD151", "#EB1C4A", "#FF8C00"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "community"],
  background: "white",
  source: "lcpmgh/colors community collection (zhihu)"
} satisfies PaletteSource;

export default palette;
