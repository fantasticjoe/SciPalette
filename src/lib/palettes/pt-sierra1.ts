import type { PaletteSource } from "../types";

const palette = {
  name: "sierra1",
  description: "Qualitative palette “sierra1” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#BD973D", "#5F5C29", "#3B7D6E", "#5792CC", "#4D5B75", "#262E43"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
