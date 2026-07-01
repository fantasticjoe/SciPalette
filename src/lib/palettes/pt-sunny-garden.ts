import type { PaletteSource } from "../types";

const palette = {
  name: "sunny garden",
  description: "Qualitative palette “sunny garden” from the ggprism collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#008000", "#8B4513", "#6699CC", "#33CC00", "#CC9900", "#FFCC00"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggprism"],
  background: "white",
  source: "ggprism (via paletteer)"
} satisfies PaletteSource;

export default palette;
