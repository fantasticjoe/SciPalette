import type { PaletteSource } from "../types";

const palette = {
  name: "fire",
  description: "Qualitative palette “fire” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B77B7B", "#FEEC44", "#F66C09", "#E60505", "#2C1B21"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
