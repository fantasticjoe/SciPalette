import type { PaletteSource } from "../types";

const palette = {
  name: "agriculture",
  description: "Qualitative palette “agriculture” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#A45C44", "#5A7F3C", "#CACA91", "#2C3B26", "#88B063"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
