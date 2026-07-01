import type { PaletteSource } from "../types";

const palette = {
  name: "wsj rgby",
  description: "Qualitative palette “wsj rgby” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D3BA68", "#D5695D", "#5D8CA8", "#65A479"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
