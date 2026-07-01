import type { PaletteSource } from "../types";

const palette = {
  name: "KeyLime",
  description: "Qualitative palette “KeyLime” from the LaCroixColoR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D84D16", "#FFF800", "#8FDA04", "#009F3F", "#132157"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
