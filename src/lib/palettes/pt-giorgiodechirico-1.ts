import type { PaletteSource } from "../types";

const palette = {
  name: "GiorgiodeChirico 1",
  description: "Qualitative palette “GiorgiodeChirico 1” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#2992BF", "#4CBED9", "#292C17", "#F9F6EF", "#F0742A"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
