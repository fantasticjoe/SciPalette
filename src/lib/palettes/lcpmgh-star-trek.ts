import type { PaletteSource } from "../types";

const palette = {
  name: "Star Trek",
  description: "Star Trek discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#CC0C00", "#5C88DA", "#84BD00", "#FFCD00", "#7C878E", "#00B5E2", "#00AF66"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
