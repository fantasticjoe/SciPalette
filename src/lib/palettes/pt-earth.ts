import type { PaletteSource } from "../types";

const palette = {
  name: "earth",
  description: "Qualitative palette “earth” from the futurevisions collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#3B4B42", "#75AC42", "#B0D9CB", "#FFFFFE", "#FCF063", "#935932", "#642E2A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
