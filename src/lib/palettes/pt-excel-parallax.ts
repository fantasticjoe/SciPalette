import type { PaletteSource } from "../types";

const palette = {
  name: "excel Parallax",
  description: "Qualitative palette “excel Parallax” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#30ACEC", "#80C34F", "#E29D3E", "#D64A3B", "#D64787", "#A666E1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
