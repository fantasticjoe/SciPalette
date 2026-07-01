import type { PaletteSource } from "../types";

const palette = {
  name: "PinaFraise",
  description: "Qualitative palette “PinaFraise” from the LaCroixColoR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#F44B4B", "#F19743", "#F1F1A8", "#92D84F", "#7473A6", "#132157"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
