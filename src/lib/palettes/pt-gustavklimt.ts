import type { PaletteSource } from "../types";

const palette = {
  name: "GustavKlimt",
  description: "Qualitative palette “GustavKlimt” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#4A5FAB", "#609F5C", "#E3C454", "#A27CBA", "#B85031"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
