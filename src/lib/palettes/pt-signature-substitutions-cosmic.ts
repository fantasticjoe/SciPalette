import type { PaletteSource } from "../types";

const palette = {
  name: "signature substitutions cosmic",
  description: "Qualitative palette “signature substitutions cosmic” from the ggsci collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#5ABCEB", "#050708", "#D33C32", "#CBCACB", "#ABCD72", "#E7C9C6"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggsci"],
  background: "white",
  source: "ggsci (via paletteer)"
} satisfies PaletteSource;

export default palette;
