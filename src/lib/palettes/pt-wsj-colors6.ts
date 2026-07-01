import type { PaletteSource } from "../types";

const palette = {
  name: "wsj colors6",
  description: "Qualitative palette “wsj colors6” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C72E29", "#016392", "#BE9C2E", "#098154", "#FB832D", "#000000"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
