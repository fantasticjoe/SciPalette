import type { PaletteSource } from "../types";

const palette = {
  name: "excel Celestial",
  description: "Qualitative palette “excel Celestial” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#AC3EC1", "#477BD1", "#46B298", "#90BA4C", "#DD9D31", "#E25247"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
