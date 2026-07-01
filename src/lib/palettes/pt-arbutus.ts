import type { PaletteSource } from "../types";

const palette = {
  name: "arbutus",
  description: "Qualitative palette “arbutus” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#DFE3CE", "#B5C861", "#8AA789", "#CB8573", "#976153"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
