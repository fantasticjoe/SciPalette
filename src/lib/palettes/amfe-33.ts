import type { PaletteSource } from "../types";

const palette = {
  name: "现代灰",
  description: "Community-curated aesthetic palette “现代灰” from color.amfe.space. Balanced hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#1E3A78", "#FFFFFF", "#A0A0A0", "#505050", "#D7D7D7"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "amfe", "curated", "现代", "灰色", "极简", "建筑"],
  background: "white",
  source: "color.amfe.space"
} satisfies PaletteSource;

export default palette;
