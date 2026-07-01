import type { PaletteSource } from "../types";

const palette = {
  name: "PommeBaya",
  description: "Qualitative palette “PommeBaya” from the LaCroixColoR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#C23A4B", "#FBBB48", "#EFEF46", "#31D64D", "#132157"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
