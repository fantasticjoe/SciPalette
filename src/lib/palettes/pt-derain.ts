import type { PaletteSource } from "../types";

const palette = {
  name: "Derain",
  description: "Qualitative palette “Derain” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#EFC86E", "#97C684", "#6F9969", "#AAB5D5", "#808FE1", "#5C66A8", "#454A74"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
