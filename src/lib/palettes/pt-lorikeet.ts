import type { PaletteSource } from "../types";

const palette = {
  name: "lorikeet",
  description: "Qualitative palette “lorikeet” from the ochRe collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#486030", "#C03018", "#F0A800", "#484878", "#A8C018", "#609048"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ochre"],
  background: "white",
  source: "ochRe (via paletteer)"
} satisfies PaletteSource;

export default palette;
