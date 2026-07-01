import type { PaletteSource } from "../types";

const palette = {
  name: "kelp1",
  description: "Qualitative palette “kelp1” from the calecopal collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C70000", "#FFBF00", "#BE8333", "#54662C", "#009BB0", "#114C54"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "calecopal"],
  background: "white",
  source: "calecopal (via paletteer)"
} satisfies PaletteSource;

export default palette;
