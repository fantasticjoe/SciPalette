import type { PaletteSource } from "../types";

const palette = {
  name: "HilmaafKlint",
  description: "Qualitative palette “HilmaafKlint” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D6CFC4", "#466CA6", "#D1AE45", "#87240E", "#040204"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
