import type { PaletteSource } from "../types";

const palette = {
  name: "YesterdayMedium",
  description: "Qualitative palette “YesterdayMedium” from the ghibli collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#061A21", "#132E41", "#26432F", "#4D6D93", "#6FB382", "#DCCA2C", "#92BBD9"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ghibli"],
  background: "white",
  source: "ghibli (via paletteer)"
} satisfies PaletteSource;

export default palette;
