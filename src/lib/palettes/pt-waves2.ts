import type { PaletteSource } from "../types";

const palette = {
  name: "waves2",
  description: "Qualitative palette “waves2” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#2E58A4", "#B69D71", "#E3DED4", "#70AFC7", "#4F5357"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
