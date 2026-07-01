import type { PaletteSource } from "../types";

const palette = {
  name: "mars",
  description: "Qualitative palette “mars” from the futurevisions collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DB3A2F", "#EAB33A", "#275D8E", "#902A57", "#F7EBD3", "#0B0C0B"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "futurevisions"],
  background: "white",
  source: "futurevisions (via paletteer)"
} satisfies PaletteSource;

export default palette;
