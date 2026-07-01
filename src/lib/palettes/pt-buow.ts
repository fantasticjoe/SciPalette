import type { PaletteSource } from "../types";

const palette = {
  name: "buow",
  description: "Qualitative palette “buow” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DED4CB", "#DBE38E", "#7E7576", "#A79787", "#3A2C21"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
