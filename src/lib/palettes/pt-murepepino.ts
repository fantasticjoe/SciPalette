import type { PaletteSource } from "../types";

const palette = {
  name: "MurePepino",
  description: "Qualitative palette “MurePepino” from the LaCroixColoR collection. Well-separated hues for multi-group categorical figures.",
  category: "categorical",
  colors: ["#D64358", "#EAFB88", "#3C8C4D", "#DFCEE0", "#4F5791", "#132157"],
  recommendedFor: ["bar", "line", "scatter", "boxplot"],
  tags: ["categorical", "multi-group", "paletteer", "lacroixcolor"],
  background: "white",
  source: "LaCroixColoR (via paletteer)"
} satisfies PaletteSource;

export default palette;
