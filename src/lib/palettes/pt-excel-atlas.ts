import type { PaletteSource } from "../types";

const palette = {
  name: "excel Atlas",
  description: "Qualitative palette “excel Atlas” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F81B02", "#FC7715", "#AFBF41", "#50C49F", "#3B95C4", "#B560D4"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
