import type { PaletteSource } from "../types";

const palette = {
  name: "Classic Green Orange 6",
  description: "Qualitative palette “Classic Green Orange 6” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#32A251", "#FF7F0F", "#3CB7CC", "#FFD94A", "#39737C", "#B85A0D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
