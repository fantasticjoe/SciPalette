import type { PaletteSource } from "../types";

const palette = {
  name: "KiwiSandia",
  description: "Qualitative palette “KiwiSandia” from the LaCroixColoR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D18F55", "#FF3F38", "#FF8C8D", "#AFDE62", "#3CBC38", "#4F5791", "#132157"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
