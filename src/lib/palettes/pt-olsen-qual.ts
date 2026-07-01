import type { PaletteSource } from "../types";

const palette = {
  name: "olsen qual",
  description: "Qualitative palette “olsen qual” from the ochRe collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C47000", "#E0C48C", "#8C3800", "#E0A81C", "#8CA8C4", "#385438"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ochre"],
  background: "white",
  source: "ochRe (via paletteer)"
} satisfies PaletteSource;

export default palette;
