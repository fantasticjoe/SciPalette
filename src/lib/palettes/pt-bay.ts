import type { PaletteSource } from "../types";

const palette = {
  name: "Bay",
  description: "Qualitative palette “Bay” from the PNWColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#00496F", "#0F85A0", "#EDD746", "#ED8B00", "#DD4124"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "pnwcolors"],
  background: "white",
  source: "PNWColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
