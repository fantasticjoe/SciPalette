import type { PaletteSource } from "../types";

const palette = {
  name: "spalette",
  description: "Qualitative palette “spalette” from the awtools collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#9F248F", "#FFCE4E", "#017A4A", "#F9791E", "#244579", "#C6242D"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "awtools"],
  background: "white",
  source: "awtools (via paletteer)"
} satisfies PaletteSource;

export default palette;
