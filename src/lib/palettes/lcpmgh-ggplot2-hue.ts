import type { PaletteSource } from "../types";

const palette = {
  name: "ggplot2 Hue",
  description: "ggplot2 Hue qualitative palette from R's base color collection (grDevices).",
  category: "categorical",
  colors: ["#000000", "#F8766D", "#00BA38", "#619CFF", "#00BFC4", "#F564E3", "#B79F00", "#9E9E9E"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "r-base"],
  background: "white",
  source: "R grDevices — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
