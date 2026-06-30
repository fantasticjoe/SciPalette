import type { PaletteSource } from "../types";

const palette = {
  name: "The Simpsons",
  description: "The Simpsons discrete qualitative palette from ggsci.",
  category: "categorical",
  colors: ["#FED439", "#709AE1", "#8A9197", "#D2AF81", "#FD7446", "#D5E4A2", "#197EC0", "#F05C3B", "#46732E", "#71D0F5", "#370335", "#075149", "#C80813", "#91331F", "#1A9993", "#FD8CC1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot", "umap"],
  tags: ["categorical", "multi-group", "lcpmgh", "qualitative"],
  background: "white",
  source: "ggsci R package — lcpmgh/colors"
} satisfies PaletteSource;

export default palette;
