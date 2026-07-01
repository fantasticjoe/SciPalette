import type { PaletteSource } from "../types";

const palette = {
  name: "superbloom3",
  description: "Qualitative palette “superbloom3” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#E69512", "#D3105C", "#3B4F8E", "#3A5D3D", "#4C4976", "#6C91BD"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
