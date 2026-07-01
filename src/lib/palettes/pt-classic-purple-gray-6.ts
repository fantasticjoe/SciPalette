import type { PaletteSource } from "../types";

const palette = {
  name: "Classic Purple Gray 6",
  description: "Qualitative palette “Classic Purple Gray 6” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#7B66D2", "#DC5FBD", "#94917B", "#995688", "#D098EE", "#D7D5C5"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
