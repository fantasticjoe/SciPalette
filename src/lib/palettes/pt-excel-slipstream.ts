import type { PaletteSource } from "../types";

const palette = {
  name: "excel Slipstream",
  description: "Qualitative palette “excel Slipstream” from the ggthemes collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#4E67C8", "#5ECCF3", "#A7EA52", "#5DCEAF", "#FF8021", "#F14124"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "ggthemes"],
  background: "white",
  source: "ggthemes (via paletteer)"
} satisfies PaletteSource;

export default palette;
