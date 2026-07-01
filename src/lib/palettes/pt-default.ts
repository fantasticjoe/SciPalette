import type { PaletteSource } from "../types";

const palette = {
  name: "default",
  description: "Qualitative palette “default” from the jcolors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#29BF12", "#00A5CF", "#DE1A1A", "#574AE2", "#FFBF00"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "jcolors"],
  background: "white",
  source: "jcolors (via paletteer)"
} satisfies PaletteSource;

export default palette;
