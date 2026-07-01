import type { PaletteSource } from "../types";

const palette = {
  name: "北欧风",
  description: "Community-curated aesthetic palette “北欧风” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3B4252", "#EBCB8B", "#A3BE8C", "#BF616A", "#D8DEE9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "北欧", "简约", "自然", "家居"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
