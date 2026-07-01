import type { PaletteSource } from "../types";

const palette = {
  name: "grassdry",
  description: "Qualitative palette “grassdry” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E1BC8D", "#845B3E", "#5B4E23", "#35301C", "#4C5454"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
