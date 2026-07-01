import type { PaletteSource } from "../types";

const palette = {
  name: "small world",
  description: "Qualitative palette “small world” from the werpals collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#00A2CE", "#B3331D", "#B6A756", "#122753", "#B86117", "#4D430C"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "werpals"],
  background: "white",
  source: "werpals (via paletteer)"
} satisfies PaletteSource;

export default palette;
