import type { PaletteSource } from "../types";

const palette = {
  name: "Picasso",
  description: "Qualitative palette “Picasso” from the MoMAColors collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D5968C", "#C2676D", "#5C363A", "#995041", "#45939C", "#0F6A81"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "momacolors"],
  background: "white",
  source: "MoMAColors (via paletteer)"
} satisfies PaletteSource;

export default palette;
