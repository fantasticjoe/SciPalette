import type { PaletteSource } from "../types";

const palette = {
  name: "iTerm",
  description: "iTerm discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#00CDE8", "#FFC739", "#FF666D", "#9DEAF6", "#B3E03A", "#A392E8"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
