import type { PaletteSource } from "../types";

const palette = {
  name: "superbloom1",
  description: "Qualitative palette “superbloom1” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#B9C7E2", "#ECAB99", "#F1C100", "#5B6530", "#9484B1"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
