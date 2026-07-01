import type { PaletteSource } from "../types";

const palette = {
  name: "Wissing",
  description: "Qualitative palette “Wissing” from the MetBrewer collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#4B1D0D", "#7C291E", "#BA7233", "#3A4421", "#2D5380"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "metbrewer"],
  background: "white",
  source: "MetBrewer (via paletteer)"
} satisfies PaletteSource;

export default palette;
