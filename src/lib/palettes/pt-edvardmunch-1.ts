import type { PaletteSource } from "../types";

const palette = {
  name: "EdvardMunch 1",
  description: "Qualitative palette “EdvardMunch 1” from the lisa collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#272A2A", "#E69253", "#EDB931", "#E4502E", "#4378A0"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lisa"],
  background: "white",
  source: "lisa (via paletteer)"
} satisfies PaletteSource;

export default palette;
